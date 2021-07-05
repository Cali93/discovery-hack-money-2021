export const toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');
export const POLYGON_DESCRIPTION = 'Polygon is a layer 2 scaling solution that offers the benefits of operating on the Ethereum mainnet, with lower costs and faster speeds due to less congestion on the network. Polygon operates two current components: the Framework and the Protocol. The Framework allows for easy deployment of individual sidechains, as well as premade modules for developers to create their own custom blockchain.'