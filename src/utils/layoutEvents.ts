export function setHeaderCollapsed(collapsed: boolean) {
  const ev = new CustomEvent('layout:setHeaderCollapsed', { detail: { collapsed } })
  window.dispatchEvent(ev)
}

export function toggleHeaderCollapsed() {
  const ev = new Event('layout:toggleHeaderCollapsed')
  window.dispatchEvent(ev)
}


