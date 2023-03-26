declare module '*.module.less' {
  const classes: {
    readonly [key: string]: string
  }
  export default classes
}

declare module '*.PNG' {
  const img: string
  export default img
}