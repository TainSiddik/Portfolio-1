const loadNavbar = async () => {
      try {
        const navbar = await fetch("components/navbar.html")
        const nav = await navbar.text()
        document.getElementById("navbar").innerHTML = nav
      } catch (err) {
        console.error("Gagal load navbar:", err)
      }
    }

    loadNavbar()

    const loadFooter = async () => {
      try {
        const foot = await fetch("components/footer.html")
        const footer = await foot.text()
        document.getElementById("footer").innerHTML = footer
      } catch (err) {
        console.error("Gagal load footer:", err)
      }
    }
    loadFooter()


  const toggleMenu = () => {
    const nav = document.querySelector(".mobileNav")
    const icon = document.querySelector("button i")

    nav.style.opacity = nav.style.opacity === "0.9" ? "0" : "0.9"

    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars")
      icon.classList.add("fa-xmark")
    } else {
      icon.classList.remove("fa-xmark")
      icon.classList.add("fa-bars")
    }
  }