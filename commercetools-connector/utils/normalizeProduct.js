export default function normalizeProduct(data, color, size) {
  //console.log(data,'data')
  // Filter for images supporting type and variations
  function getImages(viewType, variation, value) {
     const images = {}


     return data.masterVariant.images.map(image=> {
       return {src:image.url,alt:data.name.en,magnify:{ height: 1200,
        width: 800,
        src: image.url}}
     })
    // const groups = data.imageGroups || []
    // groups
    //   .filter(group => {
    //     if (group.viewType !== viewType) return false
    //     if (variation) {
    //       return (
    //         group.variationAttributes &&
    //         group.variationAttributes[0].id === variation &&
    //         group.variationAttributes[0].values[0].value === value
    //       )
    //     }
    //     return true
    //   })
    //   .reduce((memo, e) => [...memo, ...e.images], [])
    //   .forEach(({ link, alt }) => {
    //     images[link] = alt
    //   })
    //   console.log( Object.keys(images).map(src => ({ src, alt: images[src] })),'test data')
    // return Object.keys(images).map(src => ({ src, alt: images[src] }))
  }

  function getVariations(type) {
    if (!data.variationAttributes) {
      return []
    }
    const variations = data.masterVariant.attributes.find(attr => attr.id === type)
    if (!variations) return []
    return variations.values.map(({ name, value }) => {
      const id = value
      return {
        id,
        text: name,
        image:[]//, getImages('swatch', type, id)[0],
      }
    })
  }

  const colors =[]// getVariations('color')
  const sizes =[]// getVariations('size')

  // colors.forEach(c => {
  //   const thumbnails = getImages('medium', 'color', c.id)
  //   // c.media = {
  //   //   full: getImages('large', 'color', c.id),
  //   //   thumbnails,
  //   //   thumbnail: thumbnails.length ? thumbnails[0] : undefined,
  //   // }
  // })

  const media = {
    full: getImages('large'),
    thumbnails:getImages('medium'),
  }

  if (data.image) {
    // const img = {
    //   src: data.image.link,
    //   alt: data.image.alt,
    //   type: 'image',
    //   // magnify?
    // }
    //media.full.push(img)
    //media.thumbnails.push(img)
  }
data['price']=(data.masterVariant.prices[0].value.centAmount)/100
  const id = data.id || data.productId
// console.log(data.masterVariant.images)
// console.log(data.masterVariant.prices[0].value.centAmount)
  const specs = {}
  // Object.keys(data)
  //   .filter(key => key.indexOf('c_') === 0)
  //   .map(key => {
  //     return `${key.substring(2)}: ${data[key]}`
  //   })
  //   .join('\n')

  return {
    id,
    url: `/p/${id}`,
    name: data.name.en ,//|| data.productName,
    price: data.price,
    priceText: `$${data.price}.00`, // n/a
    // rating: n/a
    description:'Ex proident nisi laborum et sint aliquip dolor cupidatat pariatur sint reprehenderit incididunt duis. Ipsum fugiat adipisicing excepteur non id aliquip cupidatat culpa ex. Aliquip consectetur tempor voluptate nulla excepteur magna non. Enim enim sunt ea labore ex aliqua qui. Velit sint irure duis excepteur fugiat elit voluptate anim sint. Anim voluptate duis aliqua duis excepteur in labore aliqua. Deserunt dolore incididunt aliquip duis. Fugiat nulla sint esse in et nisi enim sit. Reprehenderit in non labore est sit voluptate ipsum sit. Proident culpa ex mollit minim laboris ipsum incididunt dolore quis proident esse ea.',
    specs: 'Ut ullamco dolor dolor velit nisi consectetur. Exercitation sint eu labore dolore nostrud nostrud occaecat ex nulla. Velit culpa ex quis minim Lorem quis consequat anim excepteur. Irure anim ea dolor minim aute quis anim duis ea duis irure sit Lorem irure. Ad duis officia exercitation aute aute incididunt tempor non in sunt nisi ut. Dolor consequat et sint tempor amet irure voluptate id. Dolore non cupidatat Lorem minim. Velit consectetur id eiusmod ad ea sint voluptate tempor duis quis excepteur. Dolore sunt ullamco est incididunt sit et. Sint aute nulla excepteur exercitation velit non.',// data.longDescription,
    media,
    thumbnail:media.thumbnails[0],
    colors,
    sizes,    
    quantity: data.quantity || 1,
    // TODO: Remove later
    raw: data,
  }
}
