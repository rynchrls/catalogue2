

const toMyFav = () => {
    const myfav = document.querySelector('.myfav')
    myfav.classList.add('active')
}

const toClose = () => {
    const myfav = document.querySelector('.myfav')
    myfav.classList.remove('active')
}


const Numeric = {
    ref: false,
    aircon1: false,
    washing: false,
    rice: false,
    aircon2: false,
    efan: false,
    oven: false,
    blender: false
}


const addRef = () => {
    const favList = document.querySelector('.fav-list')
    const Append = document.createElement('section')
    if(Numeric.ref === true) {
        return window.alert('you already have this in your favourite')
    }
    Append.classList.add('ref')
    const item = `
    <div class="ref-img">
      <img src="./images/ref.png" alt="" />
    </div>
    <div class="ref-details">
      <h2>Hanabishi Double Door Refrigerator</h2>
      <p>
        Experience optimal freshness and convenience with the Hanabishi
        Double Door Refrigerator. This stylish and spacious appliance
        combines modern design with advanced cooling technology, ensuring
        your groceries stay fresh for longer. With adjustable shelves,
        energy-efficient LED lighting, and a sleek stainless steel finish,
        this refrigerator seamlessly blends functionality and aesthetics.
        Elevate your kitchen with the reliability and performance of the
        Hanabishi Double Door Refrigerator.
      </p>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Energy Saving
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Saves up to 40% electricity
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Unit dimension: 545x595x1417mm
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Mechanical Temperature Control
      </div>
    </div>`
    favList.append(Append)
    Append.innerHTML = item
    Numeric.ref = true
}

const addAircon1 = () => {
    const favList = document.querySelector('.fav-list')
    const Append = document.createElement('section')
    if(Numeric.aircon1 === true) {
        return window.alert('you already have this in your favourite')
    }
    Append.classList.add('ref')
    const item = `
    <div class="ref-img aircon1">
      <img src="./images/aircon1.png" alt="" />
    </div>
    <div class="ref-details">
      <h2>Condura Window Type Inverter Air Conditioner</h2>
      <p>
        Elevate your indoor comfort with the Condura Window Room Inverter
        Air Conditioner. Designed for efficiency and cooling precision, this
        appliance brings a blend of powerful performance and energy-saving
        technology. With its inverter technology, it ensures consistent
        cooling while optimizing energy consumption. Easy to install and
        equipped with smart features, the Condura Window Room Inverter is a
        reliable choice for a cool and comfortable living space.
      </p>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Energy-Efficient. Low Energy Consumption
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        4 Way Air Flow Cooling
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Clean Indoor Air with Anti-Bacterial Filter
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Dimension: 560 x 375 x 638
      </div>
    </div>`

    favList.append(Append)
    Append.innerHTML = item
    Numeric.aircon1 = true
}

const addWashing = () => {
    const favList = document.querySelector('.fav-list')
    const Append = document.createElement('section')
    if(Numeric.washing === true) {
        return window.alert('you already have this in your favourite')
    }
    Append.classList.add('ref')
    const item = `
    <div class="ref-img">
      <img src="./images/washing.png" alt="" />
    </div>
    <div class="ref-details">
      <h2>Dowell WFA-75 Fully Automatic Washing Machine</h2>
      <p>
        Experience efficient and reliable laundry care with the Dowell
        WFA-75 Fully Automatic Washing Machine. This appliance is designed
        to handle your laundry needs with ease, featuring advanced washing
        technology for optimal cleanliness and fabric care. With a
        user-friendly interface and a range of washing programs, this
        washing machine offers versatility and convenience. Elevate your
        laundry routine with the performance and durability of the Dowell
        Washing Machine.
      </p>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        7.5 kg washing capacity
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        6 washing programs (normal, quick, jeans, anti-wrinkle, silk,
        air-dry)
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        6, 9 & 12 minutes wash timer
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Tempered glass cover for actual washing monitoring
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        LXWXH: 55 X 57 X96 cm
      </div>
    </div>`

    
    favList.append(Append)
    Append.innerHTML = item
    Numeric.washing = true
}

const addRice = () => {
    const favList = document.querySelector('.fav-list')
    const Append = document.createElement('section')
    if(Numeric.rice === true) {
        return window.alert('you already have this in your favourite')
    }
    Append.classList.add('ref')
    const item = `
    <div class="ref-img rice">
      <img src="./images/rice-cooker.png" alt="" />
    </div>
    <div class="ref-details">
      <h2>EDR-LSP (Drum Type Rice Cooker with Steamer)</h2>
      <p>
        Introducing the Eureka EDR LSP Drum-Type Rice Cooker with Steamer, a
        sophisticated kitchen appliance that simplifies your cooking
        experience. With its innovative drum-type design, this rice cooker
        ensures even cooking, delivering consistently fluffy rice with each
        use. The appliance features versatile cooking modes, catering to
        different rice varieties and culinary preferences. The built-in
        steamer function adds to its utility, enabling you to prepare
        healthy and flavorful steamed dishes effortlessly. Elevate your
        kitchen with the Eureka Drum-Type Rice Cooker, blending practical
        functionality with a sleek and modern design.
      </p>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        1-Touch Operation
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Cook rice or steam vegetables
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Keep rice warm, fresh, moist for hours
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Durable printed metal body
      </div>
    </div>`
    favList.append(Append)
    Append.innerHTML = item
    Numeric.rice = true
}

const addAircon2 = () => {
    const favList = document.querySelector('.fav-list')
    const Append = document.createElement('section')
    if(Numeric.aircon2 === true) {
        return window.alert('you already have this in your favourite')
    }
    Append.classList.add('ref')
    const item = `
    <div class="ref-img">
      <img src="./images/aircon2.png" alt="" />
    </div>
    <div class="ref-details">
      <h2>Union® 1.0 HP Inverter Window Type Air Conditioner</h2>
      <p>
        Introducing the Union 1.0 HP Inverter Window-Type Air Conditioner, a
        powerful and energy-efficient cooling solution for your space. This
        innovative appliance combines cutting-edge inverter technology with
        a convenient window-type design, ensuring optimal comfort with
        reduced energy consumption. Enjoy customizable cooling with multiple
        modes and fan speeds, allowing you to create the perfect indoor
        climate. The Union Air Conditioner is designed for ease of
        installation and operation, making it an ideal choice for those
        seeking reliable and efficient cooling for their home or office.
      </p>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Soft-touch control panel with LED display
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Digital control with remote
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Cooling Capacity: 5,454 kJ/hr
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Dimensions: 26.14 x 26.65 x 16.85 in (LxWxH)
      </div>
    </div>`

    favList.append(Append)
    Append.innerHTML = item
    Numeric.aircon2 = true
}

const addEfan = () => {
    const favList = document.querySelector('.fav-list')
    const Append = document.createElement('section')
    if(Numeric.efan === true) {
        return window.alert('you already have this in your favourite')
    }
    Append.classList.add('ref')
    const item =`
    <div class="ref-img efan">
      <img src="./images/efan.png" alt="" />
    </div>
    <div class="ref-details">
      <h2>Asahi DC-6082</h2>
      <p>
        Introducing the Asahi DC-6082 Refrigerator, a sleek and efficient
        addition to your kitchen. This appliance boasts a spacious interior
        and advanced cooling technology, providing optimal preservation for
        your food and beverages. With its modern design and energy-efficient
        features, the Asahi DC-6082 seamlessly combines style and
        functionality. The refrigerator's thoughtful layout, adjustable
        shelves, and temperature control options make it a reliable choice
        for those seeking a versatile and reliable cooling solution.
      </p>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        16″ (405mm) 5-leaf AS plastic fan blade
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        LED display for speed, preset & timer function
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Max speed: 1,000 RPM
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Max airflow: 54.5 m³/min
      </div>
    </div>`
    
    favList.append(Append)
    Append.innerHTML = item
    Numeric.efan = true
}

const addOven = () => {
    const favList = document.querySelector('.fav-list')
    const Append = document.createElement('section')
    if(Numeric.oven === true) {
        return window.alert('you already have this in your favourite')
    }
    Append.classList.add('ref')
    const item = `
    <div class="ref-img">
      <img src="./images//oven.png" alt="" />
    </div>
    <div class="ref-details">
      <h2>Whirlpool MWP 305 ES Microwave Oven</h2>
      <p>
        Introducing the Whirlpool MWP 305 ES Microwave Oven, a versatile
        kitchen companion designed for modern cooking needs. With a generous
        30-liter capacity, this appliance accommodates a variety of dishes,
        from quick snacks to full meals. The microwave features intuitive
        controls and multiple cooking presets for convenience, while the
        grill function adds a delightful touch of crispiness to your
        culinary creations. The Whirlpool MWP 305 ES Microwave Oven combines
        efficiency and innovation, making it an essential addition to any
        kitchen for efficient and flavorful cooking.
      </p>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Auto-cook Functions
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Digital Control
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Input Power: 1400W
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Dimension HxWxD: 30 x 53.9 x 39.8 cm
      </div>
    </div>`

        
    favList.append(Append)
    Append.innerHTML = item
    Numeric.oven= true
}

const addBlender = () => {
    const favList = document.querySelector('.fav-list')
    const Append = document.createElement('section')
    if(Numeric.blender === true) {
        return window.alert('you already have this in your favourite')
    }
    Append.classList.add('ref')
    const item = `
    <div class="ref-img blender">
      <img src="./images/blender.png" alt="" />
    </div>
    <div class="ref-details">
      <h2>Hanabishi Super Blender / Chopper HSBLEND100</h2>
      <p>
        Introducing the Hanabishi Super Blender Chopper, a multifunctional
        kitchen powerhouse designed to simplify your food preparation tasks.
        This versatile appliance features a robust blending mechanism,
        allowing you to effortlessly create smoothies, shakes, and purees.
        With an integrated chopper, it becomes your reliable partner for
        chopping and grinding ingredients with precision. The Hanabishi
        Super Blender Chopper, with its sleek design and user-friendly
        controls, is a stylish addition to your kitchen that combines
        performance and convenience for a seamless culinary experience
      </p>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Capacity: 2.0 liter & 0.7 liter cup
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        One touch operation with pulse control
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        Easy to clean
      </div>
      <div class="checklist">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <path
            d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1.999 14.413-3.713-3.705L7.7 11.292l2.299 2.295 5.294-5.294 1.414 1.414-6.706 6.706z"
          ></path>
        </svg>
        220 x 180 x 350mm
      </div>
    </div>`

    favList.append(Append)
    Append.innerHTML = item
    Numeric.blender = true
}