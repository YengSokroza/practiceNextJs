import CardContentComponent from '@/components/CardContentComponent'
import React from 'react'

export default function page() {
  return (
    <main className='w-full  grid place-content-center p-8 content-start bg-slate-50' >
      <h1 className='text-[1.5rem] font-black uppercase mb-4'>Useful contents</h1>
      <section className='max-w-[1024px] grid sm:grid-cols-4 grid-cols-1 gap-4 '>
        <CardContentComponent/>
        <CardContentComponent/>
        <CardContentComponent/>
        <CardContentComponent/>
        <CardContentComponent/>
        <CardContentComponent/>
        <CardContentComponent/>
        <CardContentComponent/>
      </section>
    </main>
  )
}
