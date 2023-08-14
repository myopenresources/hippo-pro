interface TagSelectOption {
  label: string
  value: string
  icon?: string
  //@ts-ignore
  [prop as string]: any
}

export type { TagSelectOption }
