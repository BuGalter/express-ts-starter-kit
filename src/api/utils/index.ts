import { Request } from 'express';

export const getFullUrl = (req: Request, port: number): string => {
  /**
   * The function `getFullUrl` takes a request object and a port number, and
   * returns the full URL including protocol, host, port, and original URL.
   * @param {Request} req - The `req` parameter in the `getFullUrl` function
   * is typically an object representing the HTTP request. It contains
   * information about the request such as the protocol, hostname, and
   *  original URL.
   * @param {number} port - The `port` parameter in the `getFullUrl` function
   * is the port number that will be used in the generated full URL. It is a
   * numeric value representing the port on which the server is running.
   * @returns The function `getFullUrl` returns a string that represents
   * the full URL including the protocol, hostname, port, and original
   * URL from the request object.
   */
  const protocol = req.protocol;
  const host = req.hostname;
  const url = req.originalUrl;

  const fullUrl = `${protocol}://${host}:${port}${url}`;

  return fullUrl;
};
