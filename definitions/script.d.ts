interface Script {
    /**
     * Prints to chat, and logs the contents to file. They are seperated by new lines.
     * @param contents The contents to log.
     */
    log(... contents: any[]): void;

    name: string;
    author: string;
    version: string;
    description: string;
}
declare var script: Script;

interface EngineLibraries {
    "filesystem": include.Filesystem
    "http": include.HTTP
    "clipboard": include.Clipboard
}

/**
 * Load a specified library.
 * @param path The filepath, HTTP or HTTPS link to the JS file.
 * @throws Invalid filepath or Non-OK HTTP/HTTPS error code
 */
declare function require<K extends keyof EngineLibraries>(path: K): EngineLibraries[K];


/**
 * @deprecated use require("http")
 */
declare function require(path: "network"): include.HTTP

/**
 * Load a specified script from filesystem or web.
 * @param path The filepath, HTTP or HTTPS link to the JS file.
 * @throws Invalid filepath or Non-OK HTTP/HTTPS error code
 */
declare function require(path: string): object;

/**
 * Stops execution for a specified amount of time.
 * 
 * **Warning**: This stops execution of both the JavaScript runtime and the game thread. This is only for specific use cases (use setTimeout instead.)
 * @param ms The amount of time to sleep.
 */
declare function sleep(ms: number): void;

/**
 * Delays a function call.
 * @param func The function to call
 * @param timeout The time in milliseconds
 * @returns The Timeout ID
 */
declare function setTimeout(func: () => void, timeout: number): number;

/**
 * Calls a function every x milliseconds.
 * @param func The function to call
 * @param timeout The time in milliseconds
 * @returns The Timeout ID
 */
declare function setInterval(func: () => void, timeout: number): number;