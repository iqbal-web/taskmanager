import React from 'react'
import clsx from 'clsx'

const Textbox =  React.forwardRef(({ 
	type, placeholder, label, className, register, name, error
}, ref) => {
  return (
	<div className="w-full flex flex-col gap-1">
		{label && 
		<label htmlFor={name}
		className='text-slate-800'>
			{label}
		</label>}
		<div>
			<input 
				type={type} 
				name={name} 
				placeholder={placeholder} 
				ref={ref} 
				{...register} 
				aria-invalid={error ? 'true' : 'false'}
				className={clsx('bg-transparent px-3 py-2.5 2xl:py-3 border border-grey-300 placeholder-grey-400 text-grey-900 outline-none text-base focus:ring ring-blue-300', className)}
			/>
		</div>
		{error && <span className='text-[#f64949fe] text-xs mt-0.5'>{error}</span>}
	</div>
  )
})

export default Textbox;