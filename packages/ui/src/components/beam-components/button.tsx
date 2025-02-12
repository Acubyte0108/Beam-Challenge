import React from 'react'
import { Button, ButtonProps } from '../button.js'

const BeamButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
      return (
        <Button
          size="lg"
          className='bg-red-500'
          ref={ref}
          {...props}
        />
      )
    }
  )

export { BeamButton }