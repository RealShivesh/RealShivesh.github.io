import { WIP } from '../assets/svg'
import Socials from './Socials'
import '../assets/styles/wip.scss'

const WorkInProgress = () => {
  return (
    <>
      <h1>On the horizon</h1>
      <p>A work in progress, won&apos;t be an endless process</p>
      <img src={WIP} alt="" />
      <Socials />
    </>
  )
}

export default WorkInProgress
