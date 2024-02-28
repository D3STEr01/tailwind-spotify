import Image from 'next/image';
export function Daily(){
    return(
        <div className='grid grid-cols-8 gap-4 mt-4'>
        <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src="/images.jfif" className='w-full' width={100} height={100} alt="Capa do álbum"/>
          <strong className='font-semibold'>Daily mix 1</strong>
          <span className='text-sm text-zinc-500'>Fade to black, One, Fear of the dark</span>
        </a>
        <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src="/images.jfif" className='w-full' width={100} height={100} alt="Capa do álbum"/>
          <strong className='font-semibold'>Daily mix 1</strong>
          <span className='text-sm text-zinc-500'>Fade to black, One, Fear of the dark</span>
        </a>
        <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src="/images.jfif" className='w-full' width={100} height={100} alt="Capa do álbum"/>
          <strong className='font-semibold'>Daily mix 1</strong>
          <span className='text-sm text-zinc-500'>Fade to black, One, Fear of the dark</span>
        </a>
        <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src="/images.jfif" className='w-full' width={100} height={100} alt="Capa do álbum"/>
          <strong className='font-semibold'>Daily mix 1</strong>
          <span className='text-sm text-zinc-500'>Fade to black, One, Fear of the dark</span>
        </a>
        <a href="#" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
          <Image src="/images.jfif" className='w-full' width={100} height={100} alt="Capa do álbum"/>
          <strong className='font-semibold'>Daily mix 1</strong>
          <span className='text-sm text-zinc-500'>Fade to black, One, Fear of the dark</span>
        </a>
      </div>
    )
}