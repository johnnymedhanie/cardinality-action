/**
 * Start services via docker-compose.
 */
export declare function startDockerCompose(composeFile: string, service?: string): Promise<void>;
/**
 * Stop and remove all docker-compose services.
 */
export declare function stopDockerCompose(composeFile: string): Promise<void>;
/**
 * Wait for a URL to return a 2xx status code.
 * Polls every 2 seconds until the timeout is reached.
 */
export declare function waitForHealthy(url: string, timeoutSeconds: number): Promise<void>;
