'use client'

import React, { useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { useRouter } from 'next/navigation'

import { zodResolver } from '@hookform/resolvers/zod'
import { ControllerRenderProps, useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { questionSchema } from '@/lib/validation'
import Tag from '../shared/Tag'
import Image from 'next/image'
import { createQuestion } from '@/lib/actions/question.action'

interface Props {
  author: string
}

const Question = ({ author }: Props) => {
  const editorRef = useRef(null)
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    field: ControllerRenderProps<
      {
        title: string
        explanation: string
        tags: string[]
      },
      'tags'
    >
  ) => {
    if (e.key === 'Enter' && field.name === 'tags') {
      e.preventDefault()
      const tagInput = e.target as HTMLInputElement
      const tagValue = tagInput.value.trim()

      if (field.value.length === 5) {
        return form.setError('tags', {
          message: 'Tag limit reached',
        })
      }

      if (tagValue.length === 0)
        return form.setError('tags', {
          type: 'required',
          message: 'Tag cannot be empty',
        })

      if (tagValue.length > 15) {
        return form.setError('tags', {
          type: 'max',
          message: 'Tag cannot be longer than 15 characters',
        })
      }

      if (!field.value.includes(tagValue)) {
        form.setValue('tags', [...field.value, tagValue])
        tagInput.value = ''
        form.clearErrors('tags')
      } else {
        return form.setError('tags', {
          message: 'Tag already exists',
        })
      }
    }
  }

  const handleRemoveTag = (
    tag: string,
    field: ControllerRenderProps<
      {
        title: string
        explanation: string
        tags: string[]
      },
      'tags'
    >
  ) => {
    const newTags = field.value.filter((t: string) => tag !== t)
    form.setValue('tags', newTags)
  }

  const form = useForm<z.infer<typeof questionSchema>>({
    resolver: zodResolver(questionSchema),
    defaultValues: {
      title: '',
      explanation: '',
      tags: [],
    },
  })

  async function onSubmit(values: z.infer<typeof questionSchema>) {
    setIsSubmitting(true)

    try {
      await createQuestion({
        title: values.title,
        content: values.explanation,
        tags: values.tags,
        author: JSON.parse(author),
      })
      router.push('/')
    } catch (error) {
      console.log(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Question title <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  className="no-focus paragraph-regular light-border-2 text-dark300_light700 min-h-[56px] border"
                  {...field}
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="explanation"
          render={({ field }) => {
            const { onChange, ...newField } = field
            return (
              <FormItem>
                <FormLabel className="paragraph-semibold text-dark400_light800">
                  Detailed explanation of your problem?{' '}
                  <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl className="mt-3.5">
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                    onInit={(evt, editor) => {
                      // @ts-ignore
                      editorRef.current = editor
                    }}
                    onEditorChange={(e) => {
                      console.log(e)
                      field.onChange(e)
                    }}
                    init={{
                      height: 350,
                      menubar: false,
                      plugins: [
                        'advlist',
                        'autolink',
                        'lists',
                        'link',
                        'image',
                        'charmap',
                        'preview',
                        'anchor',
                        'searchreplace',
                        'visualblocks',
                        'codesample',
                        'fullscreen',
                        'insertdatetime',
                        'media',
                        'table',
                      ],
                      toolbar:
                        'undo redo | ' +
                        'codesample | bold italic forecolor | alignleft aligncenter | ' +
                        'alignright alignjustify | bullist numlist',
                      content_style:
                        'body { font-family:Inter; font-size:16px }',
                    }}
                    {...newField}
                  />
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Introduce the problem and expand on what you put in the title.
                  Minimum 20 characters.
                </FormDescription>
                <FormMessage className="text-red-500" />
              </FormItem>
            )
          }}
        />
        <FormField
          control={form.control}
          name="tags"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="paragraph-semibold text-dark400_light800">
                Tags <span className="text-primary-500">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <>
                  <Input
                    className="no-focus paragraph-regular light-border-2 text-dark300_light700 min-h-[56px] border"
                    placeholder="Add tags..."
                    onKeyDown={(e) => handleInputKeyDown(e, field)}
                  />
                  <div className="flex flex-wrap gap-3">
                    {field.value.map((tag: string, index: number) => (
                      <Tag key={tag + index}>
                        <div className="relative px-2">
                          {tag}
                          <Image
                            src="/assets/icons/close.svg"
                            alt="close icon"
                            width={12}
                            height={12}
                            className="absolute -right-2 -top-1 cursor-pointer"
                            onClick={() => {
                              handleRemoveTag(tag, field)
                            }}
                          />
                        </div>
                      </Tag>
                    ))}
                  </div>
                </>
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-light-500">
                Add up to 5 tags to describe what your question is about. Start
                typing to see suggestions.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="primary-gradient w-fit !text-light-900"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </form>
    </Form>
  )
}

export default Question
