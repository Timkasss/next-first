import Image from "next/image";
import front from '@/public/header/front.jpg';
import styles from '@/app/ui/images.module.css';
import { inter } from '@/app/ui/fonts';

export default function Images() {
   return (
      <div className={styles.wrapper}>
         <Image
            width="720"
            height="720"
            src={front}
            alt="img"
         ></Image>
         <div className={styles.black}></div>
         <p className={`${styles.lorem} ${inter.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero blanditiis ipsum odio sit labore aliquam voluptates dolor eum temporibus ducimus cumque illo dicta aliquid possimus explicabo incidunt, eos, amet perspiciatis!</p>
      </div >

   )
}