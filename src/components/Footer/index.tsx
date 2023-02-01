export const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="p-4 bg-gray-100">
      <div>
        <small>&copy; copyright {date}</small>
      </div>
    </footer>
  )
}
