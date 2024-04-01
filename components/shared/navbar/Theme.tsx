'use client'

import Image from 'next/image'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '@/components/ui/menubar'
import { themes } from '@/constants'
import { useTheme } from '@/context/ThemeProvider'

const Theme = () => {
  const { mode, setMode } = useTheme()

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200">
          <Image
            src={`/assets/icons/${
              mode === 'light' ? 'sun' : mode === 'dark' ? 'moon' : 'computer'
            }.svg`}
            alt="sun"
            width={20}
            height={29}
            className="active-theme"
          />
        </MenubarTrigger>
        <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border bg-light-900 py-2 dark:border-dark-400 dark:bg-dark-300">
          {themes.map((theme) => (
            <MenubarItem
              key={theme.value}
              onClick={() => {
                setMode(theme.value)
                localStorage.setItem('theme', theme.value)
              }}
              className="flex items-center gap-4 px-2.5 dark:focus:bg-dark-400"
            >
              <Image
                src={theme.icon}
                alt={theme.value}
                height={16}
                width={16}
                className={`${mode === theme.value && 'active-theme'}`}
              />
              <p
                className={`body-semibold text-light-500 ${
                  mode === theme.value
                    ? 'text-primary-500'
                    : 'text-dark100_light900'
                }`}
              >
                {theme.label}
              </p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default Theme
