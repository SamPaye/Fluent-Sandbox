import { Link } from '@fluentui/react-components'
import {
  Add20Regular,
  ChevronDown20Regular,
  ChevronRight20Regular,
  Info20Regular,
  Location20Regular,
  LocationOff20Regular,
} from '@fluentui/react-icons'
import { LeftNav } from '../components/LeftNav'
import { TopNavigation } from '../components/TopNavigation'
import { useLayout } from '../contexts/LayoutContext'
import { useNavigation } from '../hooks/useNavigation'
import { useLayoutStyles } from '../hooks/useSharedStyles'
import './Devices.css'

const devicesUrl = 'https://account.microsoft.com/devices'
const supportUrl = 'https://support.microsoft.com/windows'

const devices = [
  {
    name: 'Cumulo',
    model: 'Stealth 15M A11UEKV',
    serial: 'K2110N0123348',
    location: 'Raleigh, North Carolina',
    date: '11/11/2026',
  },
  {
    name: 'DESKTOP-0BUH4B9',
    model: 'Dell G15 5511',
    serial: '2N12VN3',
    location: 'Location disabled',
  },
]

function LaptopIllustration() {
  return (
    <svg className="devices-laptop" viewBox="0 0 160 100" aria-hidden="true">
      <rect x="18" y="6" width="124" height="70" rx="2" fill="#343a40" />
      <rect x="22" y="10" width="116" height="62" fill="#2589d5" />
      <rect x="30" y="17" width="62" height="48" fill="#0067b8" />
      <path d="M37 24h19v18H37zm23 0h11v9H60zm14 0h11v9H74zM37 46h19v13H37zm23-10h25v23H60z" fill="#2589d5" />
      <path d="M18 76h124l16 16H2z" fill="#b9bbbd" />
      <path d="M2 92h156v3H2z" fill="#777" />
      <path d="M65 87h30l3 2H62z" fill="#929497" />
    </svg>
  )
}

function ManagementIllustration({ mobile = false }: { mobile?: boolean }) {
  return (
    <svg className="devices-management-art" viewBox="0 0 160 100" aria-hidden="true">
      <rect x="28" y="15" width="94" height="61" rx="2" fill="#8fc8ed" />
      <rect x="35" y="22" width="80" height="47" fill="#58a7df" />
      <path d="M24 77h102l9 5H17z" fill="#aeb6ba" />
      {mobile ? (
        <>
          <rect x="114" y="37" width="25" height="45" rx="3" fill="#69afe1" />
          <path d="M119 44h5v5h-5zm9 0h5v5h-5zm-9 9h5v5h-5zm9 0h5v5h-5zm-9 9h5v5h-5zm9 0h5v5h-5z" fill="#d7efff" />
          <path d="M18 67c-7-11-3-24 5-24 3-13 13-9 12 3 10-3 10 9 2 15l-3 17H22z" fill="#9bcf54" />
          <path d="M18 74h22l-3 13H21z" fill="#f3b61b" />
        </>
      ) : (
        <>
          <rect x="14" y="49" width="48" height="29" fill="#6fb8e7" stroke="#d4e5ef" strokeWidth="3" />
          <path d="M16 45C6 36 8 26 12 25c1 6 4 9 7 11-2-12 1-19 4-21 1 8 1 14 2 20 3-9 7-12 11-13-1 9-5 16-10 23z" fill="#82bf4f" />
          <path d="M16 45h17l-2 17H18z" fill="#edaa46" />
          <rect x="93" y="69" width="48" height="6" fill="#d2d3d4" />
          <path d="M89 78h57" stroke="#777" strokeWidth="2" />
        </>
      )}
    </svg>
  )
}

function CloudIllustration() {
  return (
    <svg className="devices-cloud-art" viewBox="0 0 180 110" aria-hidden="true">
      <path d="M42 77a25 25 0 0 1-2-50 37 37 0 0 1 69-2 37 37 0 0 1 43 33 17 17 0 0 1-3 34H45a18 18 0 0 1-3-15z" fill="#63afe5" />
      <path d="M28 52a18 18 0 0 1-1-36 27 27 0 0 1 50 0 18 18 0 0 1 1 36z" fill="#dedede" />
      <path d="M123 67a22 22 0 0 1 24 6l5-5v15h-15l6-6a16 16 0 0 0-23-4m26 20a22 22 0 0 1-24-6l-5 5V77h15l-6 6a16 16 0 0 0 23 4" fill="none" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  )
}

function DeviceCard({ device }: { device: typeof devices[number] }) {
  const locationDisabled = !device.date

  return (
    <details className="device-card" open>
      <summary className="device-card-summary">
        <span><span className="device-summary-name">{device.name}</span><span className="device-summary-model">{device.model}</span></span>
        <ChevronDown20Regular className="device-chevron" />
      </summary>
      <div className="device-overview">
        <LaptopIllustration />
        <div className="device-identity">
          <h2>{device.name}</h2>
          <p>{device.model}</p>
          <Link href={devicesUrl} target="_blank" rel="noreferrer">See details</Link>
        </div>
        <div className="device-location">
          {locationDisabled ? <LocationOff20Regular className="device-location-disabled" /> : <Location20Regular className="device-location-enabled" />}
          <span>{device.location}{device.date && <small>{device.date}</small>}</span>
        </div>
      </div>
      <a className="device-action-row" href={supportUrl} target="_blank" rel="noreferrer">
        <Info20Regular />
        <span>Info &amp; support</span>
        <span className="device-serial">Serial: {device.serial}</span>
        <ChevronRight20Regular />
      </a>
      <a className="device-action-row" href={devicesUrl} target="_blank" rel="noreferrer">
        <Location20Regular />
        <span>Find my device</span>
        <ChevronRight20Regular />
      </a>
      <div className="device-related">
        <span>Related links</span>
        <Link href={supportUrl} target="_blank" rel="noreferrer">See help &amp; learning</Link>
        <Link href={devicesUrl} target="_blank" rel="noreferrer">Remove device</Link>
      </div>
    </details>
  )
}

export default function Devices() {
  const layoutStyles = useLayoutStyles()
  const { headerCollapsed } = useLayout()
  const { handleNavSelect } = useNavigation()

  return (
    <div className={layoutStyles.root}>
      <TopNavigation headerCollapsed={headerCollapsed} />
      <div className={layoutStyles.mainLayoutWithPadding}>
        <LeftNav selectedValue="devices" onNavItemSelect={handleNavSelect} />
        <main className={`${layoutStyles.content} devices-page`}>
          <header className="devices-header">
            <h1>Devices</h1>
            <div className="devices-header-actions">
              <a href={devicesUrl} target="_blank" rel="noreferrer" className="devices-quick-action">
                <span className="devices-action-icon"><Location20Regular /></span>
                <span>Find my device<small>Locate any devices you're signed in to</small></span>
              </a>
              <a href={devicesUrl} target="_blank" rel="noreferrer" className="devices-quick-action">
                <span className="devices-action-icon"><Add20Regular /></span>
                <span>Register device<small>Connect it to your account</small></span>
              </a>
            </div>
          </header>
          <p className="devices-sample-note">Sample devices shown. Management links open your Microsoft account.</p>
          <section aria-label="Your devices" className="devices-list">
            {devices.map(device => <DeviceCard key={device.name} device={device} />)}
          </section>
          <section aria-label="Device management" className="devices-management">
            <article className="devices-management-card">
              <div>
                <h2>Microsoft Store device management</h2>
                <p>Review which devices you've downloaded apps and games to.</p>
                <Link href="https://account.microsoft.com/devices/content" target="_blank" rel="noreferrer">Manage</Link>
              </div>
              <ManagementIllustration />
            </article>
            <article className="devices-management-card">
              <div>
                <h2>Android &amp; iOS device management</h2>
                <p>Review Android and iOS devices linked to your Microsoft account.</p>
                <Link href={devicesUrl} target="_blank" rel="noreferrer">Manage</Link>
              </div>
              <ManagementIllustration mobile />
            </article>
          </section>
          <section className="devices-management-card devices-cloud">
            <div>
              <h2>Cloud synced settings</h2>
              <p>Windows devices may back up your app list and some settings in the cloud for easy syncing across devices.</p>
              <Link href={devicesUrl} target="_blank" rel="noreferrer">Clear stored settings</Link>
            </div>
            <CloudIllustration />
          </section>
        </main>
      </div>
    </div>
  )
}
