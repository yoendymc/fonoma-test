import { FormItem, Label, Select } from 'fonoma/components/common/styles'

type Props = {
  options: Array<{ value: string; key: string }>
  label: string
  name: string
  onChange?: () => void
}
const SelectItem = ({ label, name, options, onChange }: Props) => {
  return (
    <FormItem>
      <Label htmlFor={name}>{label}</Label>

      <Select name={name} onChange={onChange} defaultValue={'USD'}>
        {options.map(({ value, key }) => (
          <option key={key} value={key}>
            {value}
          </option>
        ))}
      </Select>
    </FormItem>
  )
}

export default SelectItem
