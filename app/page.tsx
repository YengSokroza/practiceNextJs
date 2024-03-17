
import BgImageComponent from "@/components/BgImageComponent";
import CardContentComponent from "@/components/CardContentComponent";
import CoursePageComponent from "@/components/CoursePageComponent";
import { Carousel } from 'flowbite-react';



export default function Home() {
  const value1 = { title: 'Center of Science and Technology Advanced Development', content: "CSTAD is a noteworthy science and technology center in Cambodia. CSTAD has routed Cambodian students to advanced science and technology, research, and develop digital skills and our graduates have been guaranteed excellent job opportunities with the Top IT company.", image: "/images/img1.jpg" };
  const value2 = { title: 'Mission', content: "Provide the latest methodology with high-quality training and mentoring Build up the capacity and career of IT experts Cambodia Consult and connect CSTAD trainees to top IT careers", image: "/images/img2.jpg" };
  const value3 = { title: 'Vision', content: "Advanced IT Center in Cambodia", image: "/images/img4.jpg" };

  return (
    <main className=" bg-gray-50 pb-16">
     <Carousel className='w-full h-screen'  slideInterval={5000}  >
            <BgImageComponent title={value1.title} content={value1.content} image={value1.image}/>
            <BgImageComponent title={value2.title} content={value2.content} image={value2.image}/>
            <BgImageComponent title={value3.title} content={value3.content} image={value3.image}/>
      </Carousel>
      <div className="bg-white w-full ">
        <CoursePageComponent/>
      </div>
      <div className="max-w-[1024px]  mx-auto ">

        <p className="text-[1.5rem] font-black uppercase">useful contents</p>
        <Carousel className='h-[300px]' slideInterval={5000} indicators={false}>
          
          <div className="flex flex-row gap-4">
            <CardContentComponent/>
            <CardContentComponent/>
            <CardContentComponent/>
            <CardContentComponent/>
          </div>
          <div className="flex flex-row gap-4">
            <CardContentComponent/>
            <CardContentComponent/>
            <CardContentComponent/>
            <CardContentComponent/>
          </div>
          <div className="flex flex-row gap-4"> 
            <CardContentComponent/>
            <CardContentComponent/>
            <CardContentComponent/>
            <CardContentComponent/>
          </div>
        </Carousel>
      </div>
      
    
    </main>
  );
}
