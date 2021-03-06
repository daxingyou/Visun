import * as $protobuf from "protobufjs";
/** Namespace qzcowcow. */
export namespace qzcowcow {

    /** Properties of a QzcowcowPlayer. */
    interface IQzcowcowPlayer {

        /** QzcowcowPlayer MyInfo */
        MyInfo?: (gamecomm.IPlayerInfo|null);

        /** QzcowcowPlayer Cards */
        Cards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a QzcowcowPlayer. */
    class QzcowcowPlayer implements IQzcowcowPlayer {

        /**
         * Constructs a new QzcowcowPlayer.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowPlayer);

        /** QzcowcowPlayer MyInfo. */
        public MyInfo?: (gamecomm.IPlayerInfo|null);

        /** QzcowcowPlayer Cards. */
        public Cards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new QzcowcowPlayer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowPlayer instance
         */
        public static create(properties?: qzcowcow.IQzcowcowPlayer): qzcowcow.QzcowcowPlayer;

        /**
         * Encodes the specified QzcowcowPlayer message. Does not implicitly {@link qzcowcow.QzcowcowPlayer.verify|verify} messages.
         * @param message QzcowcowPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowPlayer message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowPlayer.verify|verify} messages.
         * @param message QzcowcowPlayer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowPlayer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowPlayer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowPlayer;

        /**
         * Decodes a QzcowcowPlayer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowPlayer;

        /**
         * Verifies a QzcowcowPlayer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowPlayer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowPlayer
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowPlayer;

        /**
         * Creates a plain object from a QzcowcowPlayer message. Also converts values to other types if specified.
         * @param message QzcowcowPlayer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowPlayer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowPlayer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowSceneResp. */
    interface IQzcowcowSceneResp {

        /** QzcowcowSceneResp TimeStamp */
        TimeStamp?: (number|Long|null);

        /** QzcowcowSceneResp Chips */
        Chips?: (number[]|null);

        /** QzcowcowSceneResp AreaBets */
        AreaBets?: ((number|Long)[]|null);

        /** QzcowcowSceneResp MyBets */
        MyBets?: ((number|Long)[]|null);

        /** QzcowcowSceneResp Inning */
        Inning?: (string|null);

        /** QzcowcowSceneResp AllPlayers */
        AllPlayers?: (gamecomm.IPlayerListInfo|null);

        /** QzcowcowSceneResp HostID */
        HostID?: (number|Long|null);
    }

    /** Represents a QzcowcowSceneResp. */
    class QzcowcowSceneResp implements IQzcowcowSceneResp {

        /**
         * Constructs a new QzcowcowSceneResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowSceneResp);

        /** QzcowcowSceneResp TimeStamp. */
        public TimeStamp: (number|Long);

        /** QzcowcowSceneResp Chips. */
        public Chips: number[];

        /** QzcowcowSceneResp AreaBets. */
        public AreaBets: (number|Long)[];

        /** QzcowcowSceneResp MyBets. */
        public MyBets: (number|Long)[];

        /** QzcowcowSceneResp Inning. */
        public Inning: string;

        /** QzcowcowSceneResp AllPlayers. */
        public AllPlayers?: (gamecomm.IPlayerListInfo|null);

        /** QzcowcowSceneResp HostID. */
        public HostID: (number|Long);

        /**
         * Creates a new QzcowcowSceneResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowSceneResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowSceneResp): qzcowcow.QzcowcowSceneResp;

        /**
         * Encodes the specified QzcowcowSceneResp message. Does not implicitly {@link qzcowcow.QzcowcowSceneResp.verify|verify} messages.
         * @param message QzcowcowSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowSceneResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowSceneResp.verify|verify} messages.
         * @param message QzcowcowSceneResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowSceneResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowSceneResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowSceneResp;

        /**
         * Decodes a QzcowcowSceneResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowSceneResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowSceneResp;

        /**
         * Verifies a QzcowcowSceneResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowSceneResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowSceneResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowSceneResp;

        /**
         * Creates a plain object from a QzcowcowSceneResp message. Also converts values to other types if specified.
         * @param message QzcowcowSceneResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowSceneResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowSceneResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowStateFreeResp. */
    interface IQzcowcowStateFreeResp {

        /** QzcowcowStateFreeResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** QzcowcowStateFreeResp Inning */
        Inning?: (string|null);
    }

    /** Represents a QzcowcowStateFreeResp. */
    class QzcowcowStateFreeResp implements IQzcowcowStateFreeResp {

        /**
         * Constructs a new QzcowcowStateFreeResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowStateFreeResp);

        /** QzcowcowStateFreeResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** QzcowcowStateFreeResp Inning. */
        public Inning: string;

        /**
         * Creates a new QzcowcowStateFreeResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowStateFreeResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowStateFreeResp): qzcowcow.QzcowcowStateFreeResp;

        /**
         * Encodes the specified QzcowcowStateFreeResp message. Does not implicitly {@link qzcowcow.QzcowcowStateFreeResp.verify|verify} messages.
         * @param message QzcowcowStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowStateFreeResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowStateFreeResp.verify|verify} messages.
         * @param message QzcowcowStateFreeResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowStateFreeResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowStateFreeResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowStateFreeResp;

        /**
         * Decodes a QzcowcowStateFreeResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowStateFreeResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowStateFreeResp;

        /**
         * Verifies a QzcowcowStateFreeResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowStateFreeResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowStateFreeResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowStateFreeResp;

        /**
         * Creates a plain object from a QzcowcowStateFreeResp message. Also converts values to other types if specified.
         * @param message QzcowcowStateFreeResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowStateFreeResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowStateFreeResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowStateCallResp. */
    interface IQzcowcowStateCallResp {

        /** QzcowcowStateCallResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a QzcowcowStateCallResp. */
    class QzcowcowStateCallResp implements IQzcowcowStateCallResp {

        /**
         * Constructs a new QzcowcowStateCallResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowStateCallResp);

        /** QzcowcowStateCallResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new QzcowcowStateCallResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowStateCallResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowStateCallResp): qzcowcow.QzcowcowStateCallResp;

        /**
         * Encodes the specified QzcowcowStateCallResp message. Does not implicitly {@link qzcowcow.QzcowcowStateCallResp.verify|verify} messages.
         * @param message QzcowcowStateCallResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowStateCallResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowStateCallResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowStateCallResp.verify|verify} messages.
         * @param message QzcowcowStateCallResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowStateCallResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowStateCallResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowStateCallResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowStateCallResp;

        /**
         * Decodes a QzcowcowStateCallResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowStateCallResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowStateCallResp;

        /**
         * Verifies a QzcowcowStateCallResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowStateCallResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowStateCallResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowStateCallResp;

        /**
         * Creates a plain object from a QzcowcowStateCallResp message. Also converts values to other types if specified.
         * @param message QzcowcowStateCallResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowStateCallResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowStateCallResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowStateDecideResp. */
    interface IQzcowcowStateDecideResp {

        /** QzcowcowStateDecideResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** QzcowcowStateDecideResp HostID */
        HostID?: (number|Long|null);

        /** QzcowcowStateDecideResp Multiple */
        Multiple?: (number|Long|null);
    }

    /** Represents a QzcowcowStateDecideResp. */
    class QzcowcowStateDecideResp implements IQzcowcowStateDecideResp {

        /**
         * Constructs a new QzcowcowStateDecideResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowStateDecideResp);

        /** QzcowcowStateDecideResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** QzcowcowStateDecideResp HostID. */
        public HostID: (number|Long);

        /** QzcowcowStateDecideResp Multiple. */
        public Multiple: (number|Long);

        /**
         * Creates a new QzcowcowStateDecideResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowStateDecideResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowStateDecideResp): qzcowcow.QzcowcowStateDecideResp;

        /**
         * Encodes the specified QzcowcowStateDecideResp message. Does not implicitly {@link qzcowcow.QzcowcowStateDecideResp.verify|verify} messages.
         * @param message QzcowcowStateDecideResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowStateDecideResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowStateDecideResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowStateDecideResp.verify|verify} messages.
         * @param message QzcowcowStateDecideResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowStateDecideResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowStateDecideResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowStateDecideResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowStateDecideResp;

        /**
         * Decodes a QzcowcowStateDecideResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowStateDecideResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowStateDecideResp;

        /**
         * Verifies a QzcowcowStateDecideResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowStateDecideResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowStateDecideResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowStateDecideResp;

        /**
         * Creates a plain object from a QzcowcowStateDecideResp message. Also converts values to other types if specified.
         * @param message QzcowcowStateDecideResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowStateDecideResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowStateDecideResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowStatePlayingResp. */
    interface IQzcowcowStatePlayingResp {

        /** QzcowcowStatePlayingResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a QzcowcowStatePlayingResp. */
    class QzcowcowStatePlayingResp implements IQzcowcowStatePlayingResp {

        /**
         * Constructs a new QzcowcowStatePlayingResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowStatePlayingResp);

        /** QzcowcowStatePlayingResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new QzcowcowStatePlayingResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowStatePlayingResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowStatePlayingResp): qzcowcow.QzcowcowStatePlayingResp;

        /**
         * Encodes the specified QzcowcowStatePlayingResp message. Does not implicitly {@link qzcowcow.QzcowcowStatePlayingResp.verify|verify} messages.
         * @param message QzcowcowStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowStatePlayingResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowStatePlayingResp.verify|verify} messages.
         * @param message QzcowcowStatePlayingResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowStatePlayingResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowStatePlayingResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowStatePlayingResp;

        /**
         * Decodes a QzcowcowStatePlayingResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowStatePlayingResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowStatePlayingResp;

        /**
         * Verifies a QzcowcowStatePlayingResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowStatePlayingResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowStatePlayingResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowStatePlayingResp;

        /**
         * Creates a plain object from a QzcowcowStatePlayingResp message. Also converts values to other types if specified.
         * @param message QzcowcowStatePlayingResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowStatePlayingResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowStatePlayingResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowStateDealResp. */
    interface IQzcowcowStateDealResp {

        /** QzcowcowStateDealResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** QzcowcowStateDealResp Cards */
        Cards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a QzcowcowStateDealResp. */
    class QzcowcowStateDealResp implements IQzcowcowStateDealResp {

        /**
         * Constructs a new QzcowcowStateDealResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowStateDealResp);

        /** QzcowcowStateDealResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** QzcowcowStateDealResp Cards. */
        public Cards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new QzcowcowStateDealResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowStateDealResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowStateDealResp): qzcowcow.QzcowcowStateDealResp;

        /**
         * Encodes the specified QzcowcowStateDealResp message. Does not implicitly {@link qzcowcow.QzcowcowStateDealResp.verify|verify} messages.
         * @param message QzcowcowStateDealResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowStateDealResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowStateDealResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowStateDealResp.verify|verify} messages.
         * @param message QzcowcowStateDealResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowStateDealResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowStateDealResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowStateDealResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowStateDealResp;

        /**
         * Decodes a QzcowcowStateDealResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowStateDealResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowStateDealResp;

        /**
         * Verifies a QzcowcowStateDealResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowStateDealResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowStateDealResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowStateDealResp;

        /**
         * Creates a plain object from a QzcowcowStateDealResp message. Also converts values to other types if specified.
         * @param message QzcowcowStateDealResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowStateDealResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowStateDealResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowStateOpenResp. */
    interface IQzcowcowStateOpenResp {

        /** QzcowcowStateOpenResp Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** QzcowcowStateOpenResp OpenInfo */
        OpenInfo?: (qzcowcow.IQzcowcowOpenResp|null);
    }

    /** Represents a QzcowcowStateOpenResp. */
    class QzcowcowStateOpenResp implements IQzcowcowStateOpenResp {

        /**
         * Constructs a new QzcowcowStateOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowStateOpenResp);

        /** QzcowcowStateOpenResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** QzcowcowStateOpenResp OpenInfo. */
        public OpenInfo?: (qzcowcow.IQzcowcowOpenResp|null);

        /**
         * Creates a new QzcowcowStateOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowStateOpenResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowStateOpenResp): qzcowcow.QzcowcowStateOpenResp;

        /**
         * Encodes the specified QzcowcowStateOpenResp message. Does not implicitly {@link qzcowcow.QzcowcowStateOpenResp.verify|verify} messages.
         * @param message QzcowcowStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowStateOpenResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowStateOpenResp.verify|verify} messages.
         * @param message QzcowcowStateOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowStateOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowStateOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowStateOpenResp;

        /**
         * Decodes a QzcowcowStateOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowStateOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowStateOpenResp;

        /**
         * Verifies a QzcowcowStateOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowStateOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowStateOpenResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowStateOpenResp;

        /**
         * Creates a plain object from a QzcowcowStateOpenResp message. Also converts values to other types if specified.
         * @param message QzcowcowStateOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowStateOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowStateOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowStateOverResp. */
    interface IQzcowcowStateOverResp {

        /** QzcowcowStateOverResp Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a QzcowcowStateOverResp. */
    class QzcowcowStateOverResp implements IQzcowcowStateOverResp {

        /**
         * Constructs a new QzcowcowStateOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowStateOverResp);

        /** QzcowcowStateOverResp Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new QzcowcowStateOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowStateOverResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowStateOverResp): qzcowcow.QzcowcowStateOverResp;

        /**
         * Encodes the specified QzcowcowStateOverResp message. Does not implicitly {@link qzcowcow.QzcowcowStateOverResp.verify|verify} messages.
         * @param message QzcowcowStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowStateOverResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowStateOverResp.verify|verify} messages.
         * @param message QzcowcowStateOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowStateOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowStateOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowStateOverResp;

        /**
         * Decodes a QzcowcowStateOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowStateOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowStateOverResp;

        /**
         * Verifies a QzcowcowStateOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowStateOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowStateOverResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowStateOverResp;

        /**
         * Creates a plain object from a QzcowcowStateOverResp message. Also converts values to other types if specified.
         * @param message QzcowcowStateOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowStateOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowStateOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowReadyReq. */
    interface IQzcowcowReadyReq {

        /** QzcowcowReadyReq IsReady */
        IsReady?: (boolean|null);
    }

    /** Represents a QzcowcowReadyReq. */
    class QzcowcowReadyReq implements IQzcowcowReadyReq {

        /**
         * Constructs a new QzcowcowReadyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowReadyReq);

        /** QzcowcowReadyReq IsReady. */
        public IsReady: boolean;

        /**
         * Creates a new QzcowcowReadyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowReadyReq instance
         */
        public static create(properties?: qzcowcow.IQzcowcowReadyReq): qzcowcow.QzcowcowReadyReq;

        /**
         * Encodes the specified QzcowcowReadyReq message. Does not implicitly {@link qzcowcow.QzcowcowReadyReq.verify|verify} messages.
         * @param message QzcowcowReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowReadyReq message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowReadyReq.verify|verify} messages.
         * @param message QzcowcowReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowReadyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowReadyReq;

        /**
         * Decodes a QzcowcowReadyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowReadyReq;

        /**
         * Verifies a QzcowcowReadyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowReadyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowReadyReq
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowReadyReq;

        /**
         * Creates a plain object from a QzcowcowReadyReq message. Also converts values to other types if specified.
         * @param message QzcowcowReadyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowReadyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowReadyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowReadyResp. */
    interface IQzcowcowReadyResp {

        /** QzcowcowReadyResp UserId */
        UserId?: (number|Long|null);
    }

    /** Represents a QzcowcowReadyResp. */
    class QzcowcowReadyResp implements IQzcowcowReadyResp {

        /**
         * Constructs a new QzcowcowReadyResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowReadyResp);

        /** QzcowcowReadyResp UserId. */
        public UserId: (number|Long);

        /**
         * Creates a new QzcowcowReadyResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowReadyResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowReadyResp): qzcowcow.QzcowcowReadyResp;

        /**
         * Encodes the specified QzcowcowReadyResp message. Does not implicitly {@link qzcowcow.QzcowcowReadyResp.verify|verify} messages.
         * @param message QzcowcowReadyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowReadyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowReadyResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowReadyResp.verify|verify} messages.
         * @param message QzcowcowReadyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowReadyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowReadyResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowReadyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowReadyResp;

        /**
         * Decodes a QzcowcowReadyResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowReadyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowReadyResp;

        /**
         * Verifies a QzcowcowReadyResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowReadyResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowReadyResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowReadyResp;

        /**
         * Creates a plain object from a QzcowcowReadyResp message. Also converts values to other types if specified.
         * @param message QzcowcowReadyResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowReadyResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowReadyResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowCallReq. */
    interface IQzcowcowCallReq {

        /** QzcowcowCallReq Multiple */
        Multiple?: (number|Long|null);
    }

    /** Represents a QzcowcowCallReq. */
    class QzcowcowCallReq implements IQzcowcowCallReq {

        /**
         * Constructs a new QzcowcowCallReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowCallReq);

        /** QzcowcowCallReq Multiple. */
        public Multiple: (number|Long);

        /**
         * Creates a new QzcowcowCallReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowCallReq instance
         */
        public static create(properties?: qzcowcow.IQzcowcowCallReq): qzcowcow.QzcowcowCallReq;

        /**
         * Encodes the specified QzcowcowCallReq message. Does not implicitly {@link qzcowcow.QzcowcowCallReq.verify|verify} messages.
         * @param message QzcowcowCallReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowCallReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowCallReq message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowCallReq.verify|verify} messages.
         * @param message QzcowcowCallReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowCallReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowCallReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowCallReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowCallReq;

        /**
         * Decodes a QzcowcowCallReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowCallReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowCallReq;

        /**
         * Verifies a QzcowcowCallReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowCallReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowCallReq
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowCallReq;

        /**
         * Creates a plain object from a QzcowcowCallReq message. Also converts values to other types if specified.
         * @param message QzcowcowCallReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowCallReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowCallReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowCallResp. */
    interface IQzcowcowCallResp {

        /** QzcowcowCallResp UserID */
        UserID?: (number|Long|null);

        /** QzcowcowCallResp Multiple */
        Multiple?: (number|Long|null);
    }

    /** Represents a QzcowcowCallResp. */
    class QzcowcowCallResp implements IQzcowcowCallResp {

        /**
         * Constructs a new QzcowcowCallResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowCallResp);

        /** QzcowcowCallResp UserID. */
        public UserID: (number|Long);

        /** QzcowcowCallResp Multiple. */
        public Multiple: (number|Long);

        /**
         * Creates a new QzcowcowCallResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowCallResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowCallResp): qzcowcow.QzcowcowCallResp;

        /**
         * Encodes the specified QzcowcowCallResp message. Does not implicitly {@link qzcowcow.QzcowcowCallResp.verify|verify} messages.
         * @param message QzcowcowCallResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowCallResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowCallResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowCallResp.verify|verify} messages.
         * @param message QzcowcowCallResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowCallResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowCallResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowCallResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowCallResp;

        /**
         * Decodes a QzcowcowCallResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowCallResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowCallResp;

        /**
         * Verifies a QzcowcowCallResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowCallResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowCallResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowCallResp;

        /**
         * Creates a plain object from a QzcowcowCallResp message. Also converts values to other types if specified.
         * @param message QzcowcowCallResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowCallResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowCallResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowBetReq. */
    interface IQzcowcowBetReq {

        /** QzcowcowBetReq BetArea */
        BetArea?: (number|null);

        /** QzcowcowBetReq BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a QzcowcowBetReq. */
    class QzcowcowBetReq implements IQzcowcowBetReq {

        /**
         * Constructs a new QzcowcowBetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowBetReq);

        /** QzcowcowBetReq BetArea. */
        public BetArea: number;

        /** QzcowcowBetReq BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new QzcowcowBetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowBetReq instance
         */
        public static create(properties?: qzcowcow.IQzcowcowBetReq): qzcowcow.QzcowcowBetReq;

        /**
         * Encodes the specified QzcowcowBetReq message. Does not implicitly {@link qzcowcow.QzcowcowBetReq.verify|verify} messages.
         * @param message QzcowcowBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowBetReq message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowBetReq.verify|verify} messages.
         * @param message QzcowcowBetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowBetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowBetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowBetReq;

        /**
         * Decodes a QzcowcowBetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowBetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowBetReq;

        /**
         * Verifies a QzcowcowBetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowBetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowBetReq
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowBetReq;

        /**
         * Creates a plain object from a QzcowcowBetReq message. Also converts values to other types if specified.
         * @param message QzcowcowBetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowBetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowBetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowBetResp. */
    interface IQzcowcowBetResp {

        /** QzcowcowBetResp UserId */
        UserId?: (number|Long|null);

        /** QzcowcowBetResp BetArea */
        BetArea?: (number|null);

        /** QzcowcowBetResp BetScore */
        BetScore?: (number|Long|null);
    }

    /** Represents a QzcowcowBetResp. */
    class QzcowcowBetResp implements IQzcowcowBetResp {

        /**
         * Constructs a new QzcowcowBetResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowBetResp);

        /** QzcowcowBetResp UserId. */
        public UserId: (number|Long);

        /** QzcowcowBetResp BetArea. */
        public BetArea: number;

        /** QzcowcowBetResp BetScore. */
        public BetScore: (number|Long);

        /**
         * Creates a new QzcowcowBetResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowBetResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowBetResp): qzcowcow.QzcowcowBetResp;

        /**
         * Encodes the specified QzcowcowBetResp message. Does not implicitly {@link qzcowcow.QzcowcowBetResp.verify|verify} messages.
         * @param message QzcowcowBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowBetResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowBetResp.verify|verify} messages.
         * @param message QzcowcowBetResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowBetResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowBetResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowBetResp;

        /**
         * Decodes a QzcowcowBetResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowBetResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowBetResp;

        /**
         * Verifies a QzcowcowBetResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowBetResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowBetResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowBetResp;

        /**
         * Creates a plain object from a QzcowcowBetResp message. Also converts values to other types if specified.
         * @param message QzcowcowBetResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowBetResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowBetResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowOpenResp. */
    interface IQzcowcowOpenResp {

        /** QzcowcowOpenResp WinnerId */
        WinnerId?: (number|Long|null);

        /** QzcowcowOpenResp Infos */
        Infos?: (qzcowcow.IQzcowcowPlayer[]|null);
    }

    /** Represents a QzcowcowOpenResp. */
    class QzcowcowOpenResp implements IQzcowcowOpenResp {

        /**
         * Constructs a new QzcowcowOpenResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowOpenResp);

        /** QzcowcowOpenResp WinnerId. */
        public WinnerId: (number|Long);

        /** QzcowcowOpenResp Infos. */
        public Infos: qzcowcow.IQzcowcowPlayer[];

        /**
         * Creates a new QzcowcowOpenResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowOpenResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowOpenResp): qzcowcow.QzcowcowOpenResp;

        /**
         * Encodes the specified QzcowcowOpenResp message. Does not implicitly {@link qzcowcow.QzcowcowOpenResp.verify|verify} messages.
         * @param message QzcowcowOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowOpenResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowOpenResp.verify|verify} messages.
         * @param message QzcowcowOpenResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowOpenResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowOpenResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowOpenResp;

        /**
         * Decodes a QzcowcowOpenResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowOpenResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowOpenResp;

        /**
         * Verifies a QzcowcowOpenResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowOpenResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowOpenResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowOpenResp;

        /**
         * Creates a plain object from a QzcowcowOpenResp message. Also converts values to other types if specified.
         * @param message QzcowcowOpenResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowOpenResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowOpenResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QzcowcowOverResp. */
    interface IQzcowcowOverResp {

        /** QzcowcowOverResp MySettlement */
        MySettlement?: (number|Long|null);

        /** QzcowcowOverResp TotalSettlement */
        TotalSettlement?: ((number|Long)[]|null);
    }

    /** Represents a QzcowcowOverResp. */
    class QzcowcowOverResp implements IQzcowcowOverResp {

        /**
         * Constructs a new QzcowcowOverResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: qzcowcow.IQzcowcowOverResp);

        /** QzcowcowOverResp MySettlement. */
        public MySettlement: (number|Long);

        /** QzcowcowOverResp TotalSettlement. */
        public TotalSettlement: (number|Long)[];

        /**
         * Creates a new QzcowcowOverResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QzcowcowOverResp instance
         */
        public static create(properties?: qzcowcow.IQzcowcowOverResp): qzcowcow.QzcowcowOverResp;

        /**
         * Encodes the specified QzcowcowOverResp message. Does not implicitly {@link qzcowcow.QzcowcowOverResp.verify|verify} messages.
         * @param message QzcowcowOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: qzcowcow.IQzcowcowOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QzcowcowOverResp message, length delimited. Does not implicitly {@link qzcowcow.QzcowcowOverResp.verify|verify} messages.
         * @param message QzcowcowOverResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: qzcowcow.IQzcowcowOverResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QzcowcowOverResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QzcowcowOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): qzcowcow.QzcowcowOverResp;

        /**
         * Decodes a QzcowcowOverResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QzcowcowOverResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): qzcowcow.QzcowcowOverResp;

        /**
         * Verifies a QzcowcowOverResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QzcowcowOverResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QzcowcowOverResp
         */
        public static fromObject(object: { [k: string]: any }): qzcowcow.QzcowcowOverResp;

        /**
         * Creates a plain object from a QzcowcowOverResp message. Also converts values to other types if specified.
         * @param message QzcowcowOverResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: qzcowcow.QzcowcowOverResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QzcowcowOverResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
