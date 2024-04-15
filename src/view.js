class View {
  constructor() {
    this.app = document.querySelector('#root')

    // ********************* HEADER AND CHILDREN *********************
    this.header = this.createElement('header', { class: 'header' })
    // LOGO
    this.logo = this.createElement('h1', { class: 'logo' }, 'Hi Weather')
    // FORM
    this.form = this.createElement('form', { class: 'form' })
    // SEARCH INPUT
    this.searchInput = this.createElement('input', {
      class: 'search-input',
      type: 'text',
      name: 'city',
      id: 'city',
      required: true,
      placeholder: 'Enter a city name...',
    })
    // SEARCH BUTTON
    this.searchButton = this.createElement(
      'button',
      { class: 'search-button', type: 'submit' },
      'Search'
    )
    this.form.append(this.searchInput, this.searchButton)
    this.header.append(this.logo, this.form)

    // ********************* WEATHER DETAILS *********************
    this.weatherDetailsSection = this.createElement('section', {
      class: 'weather-details-section',
    })
    this.cityName = this.createElement(
      'h2',
      { class: 'location' },
      'Location: Toronto'
    )
    this.weatherDetailsSection.append(this.cityName)

    this.app.append(this.header, this.weatherDetailsSection)
  }

  // helper functions
  createElement(type, props, ...children) {
    const element = document.createElement(type)

    Object.keys(props).forEach(key => {
      element.setAttribute(key, props[key])
    })

    Array.from(children).forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child))
      } else element.appendChild(child)
    })

    return element
  }
}

export default View
