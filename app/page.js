import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import Navbar from '@/components/navbar/navbar'
import Header from '@/components/header/header'

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Header />
    </div>
  )
}
