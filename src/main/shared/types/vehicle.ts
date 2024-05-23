import * as alt from 'alt-shared';

export type WheelState = 'attached' | 'detached' | 'burst';

/**
 * Used as the main describer of a stored vehicle.
 *
 *
 * @interface Vehicle
 */
export interface Vehicle {
    /**
     * The vehicle identifier for the database.
     * Also used to save to the database.
     * @type {*}
     *
     */
    _id?: string;

    /**
     * The player who is the owner of this vehicle.
     * Corresponds with character._id or null if it belongs to anything else
     * Obviously permissions and keys should be used if no owner is set.
     *
     * @type {string}
     *
     */
    owner: string | null;

    /**
     * The model of this vehicle.
     * @type {string | number}
     *
     */
    model: string | number;

    /**
     * The last position where this vehicle was last left.
     * @type {alt.IVector3}
     *
     */
    pos: alt.IVector3;

    /**
     * The last rotation where this vehicle was last left.
     * @type {alt.IVector3}
     *
     */
    rot: alt.IVector3;

    /**
     * Used to control what dimension this vehicle should spawn in / be found in
     * @type {string}
     *
     */
    dimension: number;

    /**
     * A list of character ids that have access to this vehicle
     *
     * @type {Array<string>}
     *
     */
    keys: Array<string>;

    /**
     * The fuel level for this vehicle.
     *
     * @type {number}
     *
     */
    fuel: number;

    /**
     * Store current wheel state of the vehicle
     *
     * @type { WheelState[]}
     * @memberof Vehicle
     */
    wheelState?: WheelState[];

    /**
     * A list of mods based on value of number `numerically` and what value as a `number`.
     *
     * @type {{ [key: string]: number }}
     */
    mods?: { [key: string]: number };

    /**
     * A list of vehicle extras to apply
     *
     * @type {{ [key: string]: boolean }}
     * @memberof Vehicle
     */
    extras?: { [key: string]: boolean };

    /**
     * Window state for armored and regular windows
     *
     * @type {{ [key: string]: number }}
     * @memberof Vehicle
     */
    windows?: { [key: string]: number };

    stateProps?: {
        /**
         * Dirt level of the vehicle
         *
         * @type {number}
         * @memberof Vehicle
         */
        dirtLevel?: number;

        /**
         * Lock state of the vehicle
         *
         * @type {number}
         */
        lockState?: number;

        /**
         * Engine health of the vehicle
         *
         * @type {number}
         */
        engineHealth?: number;

        /**
         * Is the vehicle engine turned on
         *
         * @type {boolean}
         */
        engineOn?: boolean;

        /**
         * The body health of the vehicle
         *
         * @type {number}
         */
        bodyHealth?: number;

        /**
         * The light state of the vehicle, whether they're on or off
         *
         * @type {number}
         */
        lightState?: number;

        /**
         * Usually set to `1` when mods are available for the given vehicle
         *
         * @type {number}
         */
        modKit?: number;

        /**
         * Are the daylights for the vehicle turned on
         *
         * @type {boolean}
         */
        daylightOn?: boolean;
    };
}
