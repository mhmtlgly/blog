export const Footer = () => {
  const date = new Date().getFullYear()
  return (
    <footer className="p-4 py-10 bg-gray-100 text-gray-900">
      <div className="max-w-screen-lg mx-auto mb-10">
        <q className="">
          Never give up on a dream just because of the time it will take to
          accomplish it. <br /> The time will pass anyway
        </q>
        <span> - Earl Nightingale</span>
      </div>
      <small>&copy; copyright {date}</small>
    </footer>
  )
}
