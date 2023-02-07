import { FC } from "react"

interface ISelectProps {
  options: Array<IOptions>
  multiple?: boolean
  style?: IStyles
  placeholder?: string
  icon?: string
}

interface IOptions {
  label: string
  value: string
  icon?: string
}

interface IStyles {
  [key: string]: string
}

export const Select: FC<ISelectProps> = ({
  options,
  multiple,
  style,
  placeholder,
}) => {
  return (
    <div>
      <select
        placeholder={placeholder || ""}
        style={
          { ...style } || {
            background: "black",
          }
        }
        multiple={multiple || false}
        inputMode="search"
      >
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label} &emsp; {option.icon}
            </option>
          )
        })}
      </select>
    </div>
  )
}
