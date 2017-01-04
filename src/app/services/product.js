import mock from './mock'

const isFilterClean = obj => {
    return !Object.values(obj).includes(true)
}

export const filter = ({categories, variations}) => {

    return mock.products.filter(obj => {
        let { category, variation } = obj

        if (categories[category] || variations[variation]) {
            return obj
        } else if (isFilterClean(categories) && isFilterClean(variations)) {
            return obj
        }
    })
}
