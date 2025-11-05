import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'
import { cn } from '@/lib/utils'

export const CustomSelect = ({ 
  value, 
  onChange, 
  options, 
  placeholder = "Select an option",
  required = false,
  className = "",
  name = ""
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState('')
  const selectRef = useRef(null)

  useEffect(() => {
    const selected = options.find(opt => opt.value === value)
    setSelectedLabel(selected ? selected.label : '')
  }, [value, options])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (optionValue) => {
    onChange({ target: { name, value: optionValue } })
    setIsOpen(false)
  }

  return (
    <div ref={selectRef} className={cn("relative", className)}>
      {/* Hidden native select for form validation */}
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="absolute opacity-0 pointer-events-none"
        tabIndex={-1}
      >
        <option value="">Select a subject</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* Custom select button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm",
          "flex items-center justify-between",
          "ring-offset-background transition-all duration-200",
          "hover:border-primary",
          isOpen 
            ? "ring-2 ring-primary ring-offset-2 border-primary" 
            : "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
          !value && "text-muted-foreground"
        )}
      >
        <span className="truncate text-left">
          {selectedLabel || placeholder}
        </span>
        <ChevronDown 
          className={cn(
            "h-4 w-4 text-gray-500 transition-transform duration-200 flex-shrink-0 ml-2",
            isOpen && "rotate-180 text-primary"
          )} 
        />
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-auto animate-fade-in">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => handleSelect(option.value)}
              disabled={option.value === ''}
              className={cn(
                "w-full px-3 py-2.5 text-sm text-left flex items-center justify-between",
                "transition-colors duration-150",
                "hover:bg-primary/10 hover:text-primary",
                "focus:outline-none focus:bg-primary/10 focus:text-primary",
                value === option.value 
                  ? "bg-primary text-white hover:bg-primary hover:text-white font-medium" 
                  : "text-gray-700",
                option.value === '' && "text-muted-foreground cursor-default hover:bg-transparent hover:text-muted-foreground"
              )}
            >
              <span>{option.label}</span>
              {value === option.value && (
                <Check className="h-4 w-4 flex-shrink-0" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
