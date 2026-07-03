// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear()

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add scroll animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe sections
document.querySelectorAll("section").forEach((section) => {
  section.style.opacity = "0"
  section.style.transform = "translateY(20px)"
  section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(section)
})

// Certificate Lightbox
const lightbox = document.getElementById("cert-lightbox")
let pauseCarouselAutoplay = () => {}
let resumeCarouselAutoplay = () => {}

if (lightbox) {
  const lightboxImg = document.getElementById("lightbox-img")
  const lightboxCaption = document.getElementById("lightbox-caption")
  const lightboxClose = document.getElementById("lightbox-close")

  const openLightbox = (imgEl) => {
    lightboxImg.src = imgEl.src
    lightboxImg.alt = imgEl.alt || ""
    const card = imgEl.closest(".certification-card")
    const title = card ? card.querySelector("h3") : null
    lightboxCaption.textContent = title ? title.textContent : imgEl.alt || ""
    lightbox.classList.add("active")
    document.body.style.overflow = "hidden"
    pauseCarouselAutoplay()
  }

  const closeLightbox = () => {
    lightbox.classList.remove("active")
    document.body.style.overflow = ""
    resumeCarouselAutoplay()
  }

  document.querySelectorAll(".cert-image img").forEach((img) => {
    img.addEventListener("click", () => openLightbox(img))
  })

  lightboxClose.addEventListener("click", closeLightbox)

  // Close when clicking the dark backdrop (but not the image itself)
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("active")) {
      closeLightbox()
    }
  })
}

// Certifications carousel
const certTrack = document.getElementById("cert-track")

if (certTrack) {
  const prevBtn = document.getElementById("cert-prev")
  const nextBtn = document.getElementById("cert-next")
  const dotsContainer = document.getElementById("cert-dots")
  const cards = Array.from(certTrack.children)

  // Build dot indicators
  const dots = cards.map((_, index) => {
    const dot = document.createElement("button")
    dot.classList.add("carousel-dot")
    dot.setAttribute("aria-label", `Go to certification ${index + 1}`)
    dot.addEventListener("click", () => {
      cards[index].scrollIntoView({
        behavior: "smooth",
        inline: "start",
        block: "nearest",
      })
      restartAutoplay()
    })
    dotsContainer.appendChild(dot)
    return dot
  })

  const getCardStep = () => {
    if (cards.length < 1) return 0
    const cardRect = cards[0].getBoundingClientRect()
    const style = window.getComputedStyle(certTrack)
    const gap = parseFloat(style.columnGap || style.gap || "0")
    return cardRect.width + gap
  }

  const AUTOPLAY_DELAY = 4000
  let autoplayTimer = null

  const goToNext = () => {
    const maxScroll = certTrack.scrollWidth - certTrack.clientWidth
    if (certTrack.scrollLeft >= maxScroll - 4) {
      // Loop back to the start
      certTrack.scrollTo({ left: 0, behavior: "smooth" })
    } else {
      certTrack.scrollBy({ left: getCardStep(), behavior: "smooth" })
    }
  }

  const startAutoplay = () => {
    stopAutoplay()
    autoplayTimer = setInterval(goToNext, AUTOPLAY_DELAY)
  }

  const stopAutoplay = () => {
    if (autoplayTimer) {
      clearInterval(autoplayTimer)
      autoplayTimer = null
    }
  }

  const restartAutoplay = () => {
    stopAutoplay()
    startAutoplay()
  }

  pauseCarouselAutoplay = stopAutoplay
  resumeCarouselAutoplay = startAutoplay

  const updateCarouselState = () => {
    const maxScroll = certTrack.scrollWidth - certTrack.clientWidth
    prevBtn.disabled = certTrack.scrollLeft <= 4
    nextBtn.disabled = certTrack.scrollLeft >= maxScroll - 4

    // Determine the closest card to mark its dot active
    let closestIndex = 0
    let closestDistance = Infinity
    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - certTrack.scrollLeft)
      if (distance < closestDistance) {
        closestDistance = distance
        closestIndex = index
      }
    })
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === closestIndex)
    })
  }

  prevBtn.addEventListener("click", () => {
    certTrack.scrollBy({ left: -getCardStep(), behavior: "smooth" })
    restartAutoplay()
  })

  nextBtn.addEventListener("click", () => {
    certTrack.scrollBy({ left: getCardStep(), behavior: "smooth" })
    restartAutoplay()
  })

  certTrack.addEventListener("scroll", () => {
    window.requestAnimationFrame(updateCarouselState)
  })

  window.addEventListener("resize", updateCarouselState)

  // Pause autoplay while the user is interacting, resume after
  certTrack.addEventListener("mouseenter", stopAutoplay)
  certTrack.addEventListener("mouseleave", startAutoplay)
  certTrack.addEventListener("touchstart", stopAutoplay, { passive: true })
  certTrack.addEventListener("touchend", startAutoplay)
  certTrack.addEventListener("wheel", restartAutoplay, { passive: true })

  // Initialize state once layout is ready
  window.requestAnimationFrame(updateCarouselState)
  startAutoplay()
}