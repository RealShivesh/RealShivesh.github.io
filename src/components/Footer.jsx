const Footer = () => {
  const date = new Date().getFullYear()

  return (
    <footer className="footer">
      <div>© {date} RealShivesh</div>
    </footer>
  )
}

export default Footer
