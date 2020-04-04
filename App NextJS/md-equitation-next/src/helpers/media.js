import { createMedia } from "@artsy/fresnel"

const AppMedia = createMedia({
    breakpoints: {
        xs: 0,
        sm: 360,
        md: 768,
        lg: 960,
        xl: 1260,
    },
})

// Make styles for injection into the header of the page
export const mediaStyles = AppMedia.createMediaStyle()

export const { Media, MediaContextProvider } = AppMedia