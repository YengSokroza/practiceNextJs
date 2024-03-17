import CardCourseComponent from "./CardCourseComponent"

export default function CoursePageComponent() {
    return (
        <div className='w-full  grid place-content-center p-8 content-start bg-slate-50' >
          <h1 className='text-[1.5rem] font-black uppercase mb-4'>Courses</h1>
          <section className='max-w-[1024px] grid sm:grid-cols-2 grid-cols-1 gap-4 '>
            <CardCourseComponent/>
            <CardCourseComponent/>
            <CardCourseComponent/>
            <CardCourseComponent/>
            <CardCourseComponent/>
            <CardCourseComponent/>
            <CardCourseComponent/>
            <CardCourseComponent/>
          </section>
        </div>
      )
}
