export const noneBlankStringValues = (modalType, obj) => {
  const nonBlankValues = {}

  for (const key in obj) {
    if (obj[key] !== '') {
      nonBlankValues[key] = obj[key]
    }
  }

  return { [modalType.toLowerCase()]: nonBlankValues }
}

export const isEmpty = obj => (
  obj && Object.keys(obj).length === 0
)

export const renameKey = (oldKey, newKey, { [oldKey]: old, ...others }) => ({
  [newKey]: old,
  ...others
})

export const colors = {
  green: 'RGBA(0, 178, 67, .5)',
  yellow: 'RGBA(247, 195, 0, .5)',
  blue: 'darkblue'
}