import { withRouter } from 'next/router'
import classnames from 'classnames'

const ActiveLink = ({ children, router, href }) => {
  const style = classnames('btn', {
    'btn--active-link': router.pathname === href
  })

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={style}>
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)