import * as $protobuf from "protobufjs";
/** Namespace zhajinhua. */
export namespace zhajinhua {

    /** Properties of a FighterInfo. */
    interface IFighterInfo {

        /** FighterInfo UserId */
        UserId?: (number|Long|null);

        /** FighterInfo SeatId */
        SeatId?: (number|null);

        /** FighterInfo FightState */
        FightState?: (number|null);

        /** FighterInfo IsSee */
        IsSee?: (boolean|null);

        /** FighterInfo RecentBetMoney */
        RecentBetMoney?: (number|Long|null);

        /** FighterInfo TotalBetMoney */
        TotalBetMoney?: (number|Long|null);

        /** FighterInfo Cards */
        Cards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a FighterInfo. */
    class FighterInfo implements IFighterInfo {

        /**
         * Constructs a new FighterInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IFighterInfo);

        /** FighterInfo UserId. */
        public UserId: (number|Long);

        /** FighterInfo SeatId. */
        public SeatId: number;

        /** FighterInfo FightState. */
        public FightState: number;

        /** FighterInfo IsSee. */
        public IsSee: boolean;

        /** FighterInfo RecentBetMoney. */
        public RecentBetMoney: (number|Long);

        /** FighterInfo TotalBetMoney. */
        public TotalBetMoney: (number|Long);

        /** FighterInfo Cards. */
        public Cards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new FighterInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FighterInfo instance
         */
        public static create(properties?: zhajinhua.IFighterInfo): zhajinhua.FighterInfo;

        /**
         * Encodes the specified FighterInfo message. Does not implicitly {@link zhajinhua.FighterInfo.verify|verify} messages.
         * @param message FighterInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IFighterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FighterInfo message, length delimited. Does not implicitly {@link zhajinhua.FighterInfo.verify|verify} messages.
         * @param message FighterInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IFighterInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FighterInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FighterInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.FighterInfo;

        /**
         * Decodes a FighterInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FighterInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.FighterInfo;

        /**
         * Verifies a FighterInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FighterInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FighterInfo
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.FighterInfo;

        /**
         * Creates a plain object from a FighterInfo message. Also converts values to other types if specified.
         * @param message FighterInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.FighterInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FighterInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaScene. */
    interface IZhajinhuaScene {

        /** ZhajinhuaScene TimeStamp */
        TimeStamp?: (number|Long|null);

        /** ZhajinhuaScene TotalBet */
        TotalBet?: (number|Long|null);

        /** ZhajinhuaScene MinBet */
        MinBet?: (number|Long|null);

        /** ZhajinhuaScene CurHost */
        CurHost?: (number|Long|null);

        /** ZhajinhuaScene Fighters */
        Fighters?: (zhajinhua.IFighterInfo[]|null);
    }

    /** Represents a ZhajinhuaScene. */
    class ZhajinhuaScene implements IZhajinhuaScene {

        /**
         * Constructs a new ZhajinhuaScene.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaScene);

        /** ZhajinhuaScene TimeStamp. */
        public TimeStamp: (number|Long);

        /** ZhajinhuaScene TotalBet. */
        public TotalBet: (number|Long);

        /** ZhajinhuaScene MinBet. */
        public MinBet: (number|Long);

        /** ZhajinhuaScene CurHost. */
        public CurHost: (number|Long);

        /** ZhajinhuaScene Fighters. */
        public Fighters: zhajinhua.IFighterInfo[];

        /**
         * Creates a new ZhajinhuaScene instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaScene instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaScene): zhajinhua.ZhajinhuaScene;

        /**
         * Encodes the specified ZhajinhuaScene message. Does not implicitly {@link zhajinhua.ZhajinhuaScene.verify|verify} messages.
         * @param message ZhajinhuaScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaScene message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaScene.verify|verify} messages.
         * @param message ZhajinhuaScene message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaScene, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaScene message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaScene;

        /**
         * Decodes a ZhajinhuaScene message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaScene
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaScene;

        /**
         * Verifies a ZhajinhuaScene message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaScene message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaScene
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaScene;

        /**
         * Creates a plain object from a ZhajinhuaScene message. Also converts values to other types if specified.
         * @param message ZhajinhuaScene
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaScene, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaScene to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaStateFree. */
    interface IZhajinhuaStateFree {

        /** ZhajinhuaStateFree Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a ZhajinhuaStateFree. */
    class ZhajinhuaStateFree implements IZhajinhuaStateFree {

        /**
         * Constructs a new ZhajinhuaStateFree.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaStateFree);

        /** ZhajinhuaStateFree Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new ZhajinhuaStateFree instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaStateFree instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaStateFree): zhajinhua.ZhajinhuaStateFree;

        /**
         * Encodes the specified ZhajinhuaStateFree message. Does not implicitly {@link zhajinhua.ZhajinhuaStateFree.verify|verify} messages.
         * @param message ZhajinhuaStateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaStateFree message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaStateFree.verify|verify} messages.
         * @param message ZhajinhuaStateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaStateFree message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaStateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaStateFree;

        /**
         * Decodes a ZhajinhuaStateFree message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaStateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaStateFree;

        /**
         * Verifies a ZhajinhuaStateFree message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaStateFree message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaStateFree
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaStateFree;

        /**
         * Creates a plain object from a ZhajinhuaStateFree message. Also converts values to other types if specified.
         * @param message ZhajinhuaStateFree
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaStateFree, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaStateFree to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaStateStart. */
    interface IZhajinhuaStateStart {

        /** ZhajinhuaStateStart Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a ZhajinhuaStateStart. */
    class ZhajinhuaStateStart implements IZhajinhuaStateStart {

        /**
         * Constructs a new ZhajinhuaStateStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaStateStart);

        /** ZhajinhuaStateStart Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new ZhajinhuaStateStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaStateStart instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaStateStart): zhajinhua.ZhajinhuaStateStart;

        /**
         * Encodes the specified ZhajinhuaStateStart message. Does not implicitly {@link zhajinhua.ZhajinhuaStateStart.verify|verify} messages.
         * @param message ZhajinhuaStateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaStateStart message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaStateStart.verify|verify} messages.
         * @param message ZhajinhuaStateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaStateStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaStateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaStateStart;

        /**
         * Decodes a ZhajinhuaStateStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaStateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaStateStart;

        /**
         * Verifies a ZhajinhuaStateStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaStateStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaStateStart
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaStateStart;

        /**
         * Creates a plain object from a ZhajinhuaStateStart message. Also converts values to other types if specified.
         * @param message ZhajinhuaStateStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaStateStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaStateStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaStatePlaying. */
    interface IZhajinhuaStatePlaying {

        /** ZhajinhuaStatePlaying Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** ZhajinhuaStatePlaying UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a ZhajinhuaStatePlaying. */
    class ZhajinhuaStatePlaying implements IZhajinhuaStatePlaying {

        /**
         * Constructs a new ZhajinhuaStatePlaying.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaStatePlaying);

        /** ZhajinhuaStatePlaying Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** ZhajinhuaStatePlaying UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new ZhajinhuaStatePlaying instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaStatePlaying instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaStatePlaying): zhajinhua.ZhajinhuaStatePlaying;

        /**
         * Encodes the specified ZhajinhuaStatePlaying message. Does not implicitly {@link zhajinhua.ZhajinhuaStatePlaying.verify|verify} messages.
         * @param message ZhajinhuaStatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaStatePlaying message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaStatePlaying.verify|verify} messages.
         * @param message ZhajinhuaStatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaStatePlaying message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaStatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaStatePlaying;

        /**
         * Decodes a ZhajinhuaStatePlaying message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaStatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaStatePlaying;

        /**
         * Verifies a ZhajinhuaStatePlaying message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaStatePlaying message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaStatePlaying
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaStatePlaying;

        /**
         * Creates a plain object from a ZhajinhuaStatePlaying message. Also converts values to other types if specified.
         * @param message ZhajinhuaStatePlaying
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaStatePlaying, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaStatePlaying to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaStateOver. */
    interface IZhajinhuaStateOver {

        /** ZhajinhuaStateOver Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a ZhajinhuaStateOver. */
    class ZhajinhuaStateOver implements IZhajinhuaStateOver {

        /**
         * Constructs a new ZhajinhuaStateOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaStateOver);

        /** ZhajinhuaStateOver Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new ZhajinhuaStateOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaStateOver instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaStateOver): zhajinhua.ZhajinhuaStateOver;

        /**
         * Encodes the specified ZhajinhuaStateOver message. Does not implicitly {@link zhajinhua.ZhajinhuaStateOver.verify|verify} messages.
         * @param message ZhajinhuaStateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaStateOver message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaStateOver.verify|verify} messages.
         * @param message ZhajinhuaStateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaStateOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaStateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaStateOver;

        /**
         * Decodes a ZhajinhuaStateOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaStateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaStateOver;

        /**
         * Verifies a ZhajinhuaStateOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaStateOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaStateOver
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaStateOver;

        /**
         * Creates a plain object from a ZhajinhuaStateOver message. Also converts values to other types if specified.
         * @param message ZhajinhuaStateOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaStateOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaStateOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaHost. */
    interface IZhajinhuaHost {

        /** ZhajinhuaHost CurHost */
        CurHost?: (number|Long|null);
    }

    /** Represents a ZhajinhuaHost. */
    class ZhajinhuaHost implements IZhajinhuaHost {

        /**
         * Constructs a new ZhajinhuaHost.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaHost);

        /** ZhajinhuaHost CurHost. */
        public CurHost: (number|Long);

        /**
         * Creates a new ZhajinhuaHost instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaHost instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaHost): zhajinhua.ZhajinhuaHost;

        /**
         * Encodes the specified ZhajinhuaHost message. Does not implicitly {@link zhajinhua.ZhajinhuaHost.verify|verify} messages.
         * @param message ZhajinhuaHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaHost message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaHost.verify|verify} messages.
         * @param message ZhajinhuaHost message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaHost message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaHost;

        /**
         * Decodes a ZhajinhuaHost message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaHost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaHost;

        /**
         * Verifies a ZhajinhuaHost message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaHost message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaHost
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaHost;

        /**
         * Creates a plain object from a ZhajinhuaHost message. Also converts values to other types if specified.
         * @param message ZhajinhuaHost
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaHost, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaHost to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaReadyReq. */
    interface IZhajinhuaReadyReq {

        /** ZhajinhuaReadyReq IsReady */
        IsReady?: (boolean|null);
    }

    /** Represents a ZhajinhuaReadyReq. */
    class ZhajinhuaReadyReq implements IZhajinhuaReadyReq {

        /**
         * Constructs a new ZhajinhuaReadyReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaReadyReq);

        /** ZhajinhuaReadyReq IsReady. */
        public IsReady: boolean;

        /**
         * Creates a new ZhajinhuaReadyReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaReadyReq instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaReadyReq): zhajinhua.ZhajinhuaReadyReq;

        /**
         * Encodes the specified ZhajinhuaReadyReq message. Does not implicitly {@link zhajinhua.ZhajinhuaReadyReq.verify|verify} messages.
         * @param message ZhajinhuaReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaReadyReq message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaReadyReq.verify|verify} messages.
         * @param message ZhajinhuaReadyReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaReadyReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaReadyReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaReadyReq;

        /**
         * Decodes a ZhajinhuaReadyReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaReadyReq;

        /**
         * Verifies a ZhajinhuaReadyReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaReadyReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaReadyReq
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaReadyReq;

        /**
         * Creates a plain object from a ZhajinhuaReadyReq message. Also converts values to other types if specified.
         * @param message ZhajinhuaReadyReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaReadyReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaReadyReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaReadyResp. */
    interface IZhajinhuaReadyResp {

        /** ZhajinhuaReadyResp UserId */
        UserId?: (number|Long|null);
    }

    /** Represents a ZhajinhuaReadyResp. */
    class ZhajinhuaReadyResp implements IZhajinhuaReadyResp {

        /**
         * Constructs a new ZhajinhuaReadyResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaReadyResp);

        /** ZhajinhuaReadyResp UserId. */
        public UserId: (number|Long);

        /**
         * Creates a new ZhajinhuaReadyResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaReadyResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaReadyResp): zhajinhua.ZhajinhuaReadyResp;

        /**
         * Encodes the specified ZhajinhuaReadyResp message. Does not implicitly {@link zhajinhua.ZhajinhuaReadyResp.verify|verify} messages.
         * @param message ZhajinhuaReadyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaReadyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaReadyResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaReadyResp.verify|verify} messages.
         * @param message ZhajinhuaReadyResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaReadyResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaReadyResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaReadyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaReadyResp;

        /**
         * Decodes a ZhajinhuaReadyResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaReadyResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaReadyResp;

        /**
         * Verifies a ZhajinhuaReadyResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaReadyResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaReadyResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaReadyResp;

        /**
         * Creates a plain object from a ZhajinhuaReadyResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaReadyResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaReadyResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaReadyResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaFollowReq. */
    interface IZhajinhuaFollowReq {
    }

    /** Represents a ZhajinhuaFollowReq. */
    class ZhajinhuaFollowReq implements IZhajinhuaFollowReq {

        /**
         * Constructs a new ZhajinhuaFollowReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaFollowReq);

        /**
         * Creates a new ZhajinhuaFollowReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaFollowReq instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaFollowReq): zhajinhua.ZhajinhuaFollowReq;

        /**
         * Encodes the specified ZhajinhuaFollowReq message. Does not implicitly {@link zhajinhua.ZhajinhuaFollowReq.verify|verify} messages.
         * @param message ZhajinhuaFollowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaFollowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaFollowReq message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaFollowReq.verify|verify} messages.
         * @param message ZhajinhuaFollowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaFollowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaFollowReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaFollowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaFollowReq;

        /**
         * Decodes a ZhajinhuaFollowReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaFollowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaFollowReq;

        /**
         * Verifies a ZhajinhuaFollowReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaFollowReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaFollowReq
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaFollowReq;

        /**
         * Creates a plain object from a ZhajinhuaFollowReq message. Also converts values to other types if specified.
         * @param message ZhajinhuaFollowReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaFollowReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaFollowReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaFollowResp. */
    interface IZhajinhuaFollowResp {

        /** ZhajinhuaFollowResp UserId */
        UserId?: (number|Long|null);

        /** ZhajinhuaFollowResp Money */
        Money?: (number|Long|null);
    }

    /** Represents a ZhajinhuaFollowResp. */
    class ZhajinhuaFollowResp implements IZhajinhuaFollowResp {

        /**
         * Constructs a new ZhajinhuaFollowResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaFollowResp);

        /** ZhajinhuaFollowResp UserId. */
        public UserId: (number|Long);

        /** ZhajinhuaFollowResp Money. */
        public Money: (number|Long);

        /**
         * Creates a new ZhajinhuaFollowResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaFollowResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaFollowResp): zhajinhua.ZhajinhuaFollowResp;

        /**
         * Encodes the specified ZhajinhuaFollowResp message. Does not implicitly {@link zhajinhua.ZhajinhuaFollowResp.verify|verify} messages.
         * @param message ZhajinhuaFollowResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaFollowResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaFollowResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaFollowResp.verify|verify} messages.
         * @param message ZhajinhuaFollowResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaFollowResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaFollowResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaFollowResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaFollowResp;

        /**
         * Decodes a ZhajinhuaFollowResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaFollowResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaFollowResp;

        /**
         * Verifies a ZhajinhuaFollowResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaFollowResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaFollowResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaFollowResp;

        /**
         * Creates a plain object from a ZhajinhuaFollowResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaFollowResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaFollowResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaFollowResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaRaiseReq. */
    interface IZhajinhuaRaiseReq {

        /** ZhajinhuaRaiseReq Money */
        Money?: (number|Long|null);
    }

    /** Represents a ZhajinhuaRaiseReq. */
    class ZhajinhuaRaiseReq implements IZhajinhuaRaiseReq {

        /**
         * Constructs a new ZhajinhuaRaiseReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaRaiseReq);

        /** ZhajinhuaRaiseReq Money. */
        public Money: (number|Long);

        /**
         * Creates a new ZhajinhuaRaiseReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaRaiseReq instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaRaiseReq): zhajinhua.ZhajinhuaRaiseReq;

        /**
         * Encodes the specified ZhajinhuaRaiseReq message. Does not implicitly {@link zhajinhua.ZhajinhuaRaiseReq.verify|verify} messages.
         * @param message ZhajinhuaRaiseReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaRaiseReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaRaiseReq message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaRaiseReq.verify|verify} messages.
         * @param message ZhajinhuaRaiseReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaRaiseReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaRaiseReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaRaiseReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaRaiseReq;

        /**
         * Decodes a ZhajinhuaRaiseReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaRaiseReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaRaiseReq;

        /**
         * Verifies a ZhajinhuaRaiseReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaRaiseReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaRaiseReq
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaRaiseReq;

        /**
         * Creates a plain object from a ZhajinhuaRaiseReq message. Also converts values to other types if specified.
         * @param message ZhajinhuaRaiseReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaRaiseReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaRaiseReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaRaiseResp. */
    interface IZhajinhuaRaiseResp {

        /** ZhajinhuaRaiseResp UserId */
        UserId?: (number|Long|null);

        /** ZhajinhuaRaiseResp Money */
        Money?: (number|Long|null);
    }

    /** Represents a ZhajinhuaRaiseResp. */
    class ZhajinhuaRaiseResp implements IZhajinhuaRaiseResp {

        /**
         * Constructs a new ZhajinhuaRaiseResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaRaiseResp);

        /** ZhajinhuaRaiseResp UserId. */
        public UserId: (number|Long);

        /** ZhajinhuaRaiseResp Money. */
        public Money: (number|Long);

        /**
         * Creates a new ZhajinhuaRaiseResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaRaiseResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaRaiseResp): zhajinhua.ZhajinhuaRaiseResp;

        /**
         * Encodes the specified ZhajinhuaRaiseResp message. Does not implicitly {@link zhajinhua.ZhajinhuaRaiseResp.verify|verify} messages.
         * @param message ZhajinhuaRaiseResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaRaiseResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaRaiseResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaRaiseResp.verify|verify} messages.
         * @param message ZhajinhuaRaiseResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaRaiseResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaRaiseResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaRaiseResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaRaiseResp;

        /**
         * Decodes a ZhajinhuaRaiseResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaRaiseResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaRaiseResp;

        /**
         * Verifies a ZhajinhuaRaiseResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaRaiseResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaRaiseResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaRaiseResp;

        /**
         * Creates a plain object from a ZhajinhuaRaiseResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaRaiseResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaRaiseResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaRaiseResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaLookReq. */
    interface IZhajinhuaLookReq {
    }

    /** Represents a ZhajinhuaLookReq. */
    class ZhajinhuaLookReq implements IZhajinhuaLookReq {

        /**
         * Constructs a new ZhajinhuaLookReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaLookReq);

        /**
         * Creates a new ZhajinhuaLookReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaLookReq instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaLookReq): zhajinhua.ZhajinhuaLookReq;

        /**
         * Encodes the specified ZhajinhuaLookReq message. Does not implicitly {@link zhajinhua.ZhajinhuaLookReq.verify|verify} messages.
         * @param message ZhajinhuaLookReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaLookReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaLookReq message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaLookReq.verify|verify} messages.
         * @param message ZhajinhuaLookReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaLookReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaLookReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaLookReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaLookReq;

        /**
         * Decodes a ZhajinhuaLookReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaLookReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaLookReq;

        /**
         * Verifies a ZhajinhuaLookReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaLookReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaLookReq
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaLookReq;

        /**
         * Creates a plain object from a ZhajinhuaLookReq message. Also converts values to other types if specified.
         * @param message ZhajinhuaLookReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaLookReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaLookReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaLookResp. */
    interface IZhajinhuaLookResp {

        /** ZhajinhuaLookResp UserId */
        UserId?: (number|Long|null);

        /** ZhajinhuaLookResp Cards */
        Cards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a ZhajinhuaLookResp. */
    class ZhajinhuaLookResp implements IZhajinhuaLookResp {

        /**
         * Constructs a new ZhajinhuaLookResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaLookResp);

        /** ZhajinhuaLookResp UserId. */
        public UserId: (number|Long);

        /** ZhajinhuaLookResp Cards. */
        public Cards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new ZhajinhuaLookResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaLookResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaLookResp): zhajinhua.ZhajinhuaLookResp;

        /**
         * Encodes the specified ZhajinhuaLookResp message. Does not implicitly {@link zhajinhua.ZhajinhuaLookResp.verify|verify} messages.
         * @param message ZhajinhuaLookResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaLookResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaLookResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaLookResp.verify|verify} messages.
         * @param message ZhajinhuaLookResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaLookResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaLookResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaLookResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaLookResp;

        /**
         * Decodes a ZhajinhuaLookResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaLookResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaLookResp;

        /**
         * Verifies a ZhajinhuaLookResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaLookResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaLookResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaLookResp;

        /**
         * Creates a plain object from a ZhajinhuaLookResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaLookResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaLookResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaLookResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaCompareReq. */
    interface IZhajinhuaCompareReq {

        /** ZhajinhuaCompareReq HitId */
        HitId?: (number|Long|null);
    }

    /** Represents a ZhajinhuaCompareReq. */
    class ZhajinhuaCompareReq implements IZhajinhuaCompareReq {

        /**
         * Constructs a new ZhajinhuaCompareReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaCompareReq);

        /** ZhajinhuaCompareReq HitId. */
        public HitId: (number|Long);

        /**
         * Creates a new ZhajinhuaCompareReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaCompareReq instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaCompareReq): zhajinhua.ZhajinhuaCompareReq;

        /**
         * Encodes the specified ZhajinhuaCompareReq message. Does not implicitly {@link zhajinhua.ZhajinhuaCompareReq.verify|verify} messages.
         * @param message ZhajinhuaCompareReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaCompareReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaCompareReq message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaCompareReq.verify|verify} messages.
         * @param message ZhajinhuaCompareReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaCompareReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaCompareReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaCompareReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaCompareReq;

        /**
         * Decodes a ZhajinhuaCompareReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaCompareReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaCompareReq;

        /**
         * Verifies a ZhajinhuaCompareReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaCompareReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaCompareReq
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaCompareReq;

        /**
         * Creates a plain object from a ZhajinhuaCompareReq message. Also converts values to other types if specified.
         * @param message ZhajinhuaCompareReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaCompareReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaCompareReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaCompareResp. */
    interface IZhajinhuaCompareResp {

        /** ZhajinhuaCompareResp AttackerId */
        AttackerId?: (number|Long|null);

        /** ZhajinhuaCompareResp HitId */
        HitId?: (number|Long|null);

        /** ZhajinhuaCompareResp WinnerId */
        WinnerId?: (number|Long|null);

        /** ZhajinhuaCompareResp AttackerCards */
        AttackerCards?: (gamecomm.ICardInfo|null);

        /** ZhajinhuaCompareResp HitCards */
        HitCards?: (gamecomm.ICardInfo|null);
    }

    /** Represents a ZhajinhuaCompareResp. */
    class ZhajinhuaCompareResp implements IZhajinhuaCompareResp {

        /**
         * Constructs a new ZhajinhuaCompareResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaCompareResp);

        /** ZhajinhuaCompareResp AttackerId. */
        public AttackerId: (number|Long);

        /** ZhajinhuaCompareResp HitId. */
        public HitId: (number|Long);

        /** ZhajinhuaCompareResp WinnerId. */
        public WinnerId: (number|Long);

        /** ZhajinhuaCompareResp AttackerCards. */
        public AttackerCards?: (gamecomm.ICardInfo|null);

        /** ZhajinhuaCompareResp HitCards. */
        public HitCards?: (gamecomm.ICardInfo|null);

        /**
         * Creates a new ZhajinhuaCompareResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaCompareResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaCompareResp): zhajinhua.ZhajinhuaCompareResp;

        /**
         * Encodes the specified ZhajinhuaCompareResp message. Does not implicitly {@link zhajinhua.ZhajinhuaCompareResp.verify|verify} messages.
         * @param message ZhajinhuaCompareResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaCompareResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaCompareResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaCompareResp.verify|verify} messages.
         * @param message ZhajinhuaCompareResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaCompareResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaCompareResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaCompareResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaCompareResp;

        /**
         * Decodes a ZhajinhuaCompareResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaCompareResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaCompareResp;

        /**
         * Verifies a ZhajinhuaCompareResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaCompareResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaCompareResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaCompareResp;

        /**
         * Creates a plain object from a ZhajinhuaCompareResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaCompareResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaCompareResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaCompareResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaGiveupReq. */
    interface IZhajinhuaGiveupReq {
    }

    /** Represents a ZhajinhuaGiveupReq. */
    class ZhajinhuaGiveupReq implements IZhajinhuaGiveupReq {

        /**
         * Constructs a new ZhajinhuaGiveupReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaGiveupReq);

        /**
         * Creates a new ZhajinhuaGiveupReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaGiveupReq instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaGiveupReq): zhajinhua.ZhajinhuaGiveupReq;

        /**
         * Encodes the specified ZhajinhuaGiveupReq message. Does not implicitly {@link zhajinhua.ZhajinhuaGiveupReq.verify|verify} messages.
         * @param message ZhajinhuaGiveupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaGiveupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaGiveupReq message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaGiveupReq.verify|verify} messages.
         * @param message ZhajinhuaGiveupReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaGiveupReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaGiveupReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaGiveupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaGiveupReq;

        /**
         * Decodes a ZhajinhuaGiveupReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaGiveupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaGiveupReq;

        /**
         * Verifies a ZhajinhuaGiveupReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaGiveupReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaGiveupReq
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaGiveupReq;

        /**
         * Creates a plain object from a ZhajinhuaGiveupReq message. Also converts values to other types if specified.
         * @param message ZhajinhuaGiveupReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaGiveupReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaGiveupReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaGiveupResp. */
    interface IZhajinhuaGiveupResp {

        /** ZhajinhuaGiveupResp UserId */
        UserId?: (number|Long|null);
    }

    /** Represents a ZhajinhuaGiveupResp. */
    class ZhajinhuaGiveupResp implements IZhajinhuaGiveupResp {

        /**
         * Constructs a new ZhajinhuaGiveupResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaGiveupResp);

        /** ZhajinhuaGiveupResp UserId. */
        public UserId: (number|Long);

        /**
         * Creates a new ZhajinhuaGiveupResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaGiveupResp instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaGiveupResp): zhajinhua.ZhajinhuaGiveupResp;

        /**
         * Encodes the specified ZhajinhuaGiveupResp message. Does not implicitly {@link zhajinhua.ZhajinhuaGiveupResp.verify|verify} messages.
         * @param message ZhajinhuaGiveupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaGiveupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaGiveupResp message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaGiveupResp.verify|verify} messages.
         * @param message ZhajinhuaGiveupResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaGiveupResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaGiveupResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaGiveupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaGiveupResp;

        /**
         * Decodes a ZhajinhuaGiveupResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaGiveupResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaGiveupResp;

        /**
         * Verifies a ZhajinhuaGiveupResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaGiveupResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaGiveupResp
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaGiveupResp;

        /**
         * Creates a plain object from a ZhajinhuaGiveupResp message. Also converts values to other types if specified.
         * @param message ZhajinhuaGiveupResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaGiveupResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaGiveupResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhajinhuaOver. */
    interface IZhajinhuaOver {

        /** ZhajinhuaOver WinnerId */
        WinnerId?: (number|Long|null);

        /** ZhajinhuaOver Infos */
        Infos?: (gamecomm.IMoneyCalculateInfo[]|null);
    }

    /** Represents a ZhajinhuaOver. */
    class ZhajinhuaOver implements IZhajinhuaOver {

        /**
         * Constructs a new ZhajinhuaOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: zhajinhua.IZhajinhuaOver);

        /** ZhajinhuaOver WinnerId. */
        public WinnerId: (number|Long);

        /** ZhajinhuaOver Infos. */
        public Infos: gamecomm.IMoneyCalculateInfo[];

        /**
         * Creates a new ZhajinhuaOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhajinhuaOver instance
         */
        public static create(properties?: zhajinhua.IZhajinhuaOver): zhajinhua.ZhajinhuaOver;

        /**
         * Encodes the specified ZhajinhuaOver message. Does not implicitly {@link zhajinhua.ZhajinhuaOver.verify|verify} messages.
         * @param message ZhajinhuaOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: zhajinhua.IZhajinhuaOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhajinhuaOver message, length delimited. Does not implicitly {@link zhajinhua.ZhajinhuaOver.verify|verify} messages.
         * @param message ZhajinhuaOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: zhajinhua.IZhajinhuaOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhajinhuaOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhajinhuaOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): zhajinhua.ZhajinhuaOver;

        /**
         * Decodes a ZhajinhuaOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhajinhuaOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): zhajinhua.ZhajinhuaOver;

        /**
         * Verifies a ZhajinhuaOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhajinhuaOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhajinhuaOver
         */
        public static fromObject(object: { [k: string]: any }): zhajinhua.ZhajinhuaOver;

        /**
         * Creates a plain object from a ZhajinhuaOver message. Also converts values to other types if specified.
         * @param message ZhajinhuaOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: zhajinhua.ZhajinhuaOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhajinhuaOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace gamecomm. */
export namespace gamecomm {

    /** Properties of a PlayerInfo. */
    interface IPlayerInfo {

        /** PlayerInfo UserID */
        UserID?: (number|Long|null);

        /** PlayerInfo Name */
        Name?: (string|null);

        /** PlayerInfo Age */
        Age?: (number|null);

        /** PlayerInfo Sex */
        Sex?: (number|null);

        /** PlayerInfo Gold */
        Gold?: (number|Long|null);

        /** PlayerInfo VipLevel */
        VipLevel?: (number|null);

        /** PlayerInfo Account */
        Account?: (string|null);

        /** PlayerInfo Sate */
        Sate?: (number|null);

        /** PlayerInfo ChairID */
        ChairID?: (number|null);
    }

    /** Represents a PlayerInfo. */
    class PlayerInfo implements IPlayerInfo {

        /**
         * Constructs a new PlayerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IPlayerInfo);

        /** PlayerInfo UserID. */
        public UserID: (number|Long);

        /** PlayerInfo Name. */
        public Name: string;

        /** PlayerInfo Age. */
        public Age: number;

        /** PlayerInfo Sex. */
        public Sex: number;

        /** PlayerInfo Gold. */
        public Gold: (number|Long);

        /** PlayerInfo VipLevel. */
        public VipLevel: number;

        /** PlayerInfo Account. */
        public Account: string;

        /** PlayerInfo Sate. */
        public Sate: number;

        /** PlayerInfo ChairID. */
        public ChairID: number;

        /**
         * Creates a new PlayerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerInfo instance
         */
        public static create(properties?: gamecomm.IPlayerInfo): gamecomm.PlayerInfo;

        /**
         * Encodes the specified PlayerInfo message. Does not implicitly {@link gamecomm.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link gamecomm.PlayerInfo.verify|verify} messages.
         * @param message PlayerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IPlayerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.PlayerInfo;

        /**
         * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.PlayerInfo;

        /**
         * Verifies a PlayerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.PlayerInfo;

        /**
         * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
         * @param message PlayerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.PlayerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CardInfo. */
    interface ICardInfo {

        /** CardInfo Cards */
        Cards?: (Uint8Array|null);

        /** CardInfo CardType */
        CardType?: (number|null);

        /** CardInfo CardValue */
        CardValue?: (number|null);
    }

    /** Represents a CardInfo. */
    class CardInfo implements ICardInfo {

        /**
         * Constructs a new CardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ICardInfo);

        /** CardInfo Cards. */
        public Cards: Uint8Array;

        /** CardInfo CardType. */
        public CardType: number;

        /** CardInfo CardValue. */
        public CardValue: number;

        /**
         * Creates a new CardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CardInfo instance
         */
        public static create(properties?: gamecomm.ICardInfo): gamecomm.CardInfo;

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link gamecomm.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ICardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CardInfo message, length delimited. Does not implicitly {@link gamecomm.CardInfo.verify|verify} messages.
         * @param message CardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ICardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.CardInfo;

        /**
         * Decodes a CardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.CardInfo;

        /**
         * Verifies a CardInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CardInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CardInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.CardInfo;

        /**
         * Creates a plain object from a CardInfo message. Also converts values to other types if specified.
         * @param message CardInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.CardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CardInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TimeInfo. */
    interface ITimeInfo {

        /** TimeInfo TimeStamp */
        TimeStamp?: (number|Long|null);

        /** TimeInfo WaitTime */
        WaitTime?: (number|null);

        /** TimeInfo OutTime */
        OutTime?: (number|null);

        /** TimeInfo TotalTime */
        TotalTime?: (number|null);
    }

    /** Represents a TimeInfo. */
    class TimeInfo implements ITimeInfo {

        /**
         * Constructs a new TimeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ITimeInfo);

        /** TimeInfo TimeStamp. */
        public TimeStamp: (number|Long);

        /** TimeInfo WaitTime. */
        public WaitTime: number;

        /** TimeInfo OutTime. */
        public OutTime: number;

        /** TimeInfo TotalTime. */
        public TotalTime: number;

        /**
         * Creates a new TimeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TimeInfo instance
         */
        public static create(properties?: gamecomm.ITimeInfo): gamecomm.TimeInfo;

        /**
         * Encodes the specified TimeInfo message. Does not implicitly {@link gamecomm.TimeInfo.verify|verify} messages.
         * @param message TimeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ITimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TimeInfo message, length delimited. Does not implicitly {@link gamecomm.TimeInfo.verify|verify} messages.
         * @param message TimeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ITimeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TimeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TimeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.TimeInfo;

        /**
         * Decodes a TimeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TimeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.TimeInfo;

        /**
         * Verifies a TimeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TimeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TimeInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.TimeInfo;

        /**
         * Creates a plain object from a TimeInfo message. Also converts values to other types if specified.
         * @param message TimeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.TimeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TimeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserList. */
    interface IUserList {

        /** UserList AllInfos */
        AllInfos?: (gamecomm.IPlayerInfo[]|null);
    }

    /** Represents a UserList. */
    class UserList implements IUserList {

        /**
         * Constructs a new UserList.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IUserList);

        /** UserList AllInfos. */
        public AllInfos: gamecomm.IPlayerInfo[];

        /**
         * Creates a new UserList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserList instance
         */
        public static create(properties?: gamecomm.IUserList): gamecomm.UserList;

        /**
         * Encodes the specified UserList message. Does not implicitly {@link gamecomm.UserList.verify|verify} messages.
         * @param message UserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserList message, length delimited. Does not implicitly {@link gamecomm.UserList.verify|verify} messages.
         * @param message UserList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IUserList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.UserList;

        /**
         * Decodes a UserList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.UserList;

        /**
         * Verifies a UserList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserList
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.UserList;

        /**
         * Creates a plain object from a UserList message. Also converts values to other types if specified.
         * @param message UserList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.UserList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqEnterGame. */
    interface IReqEnterGame {

        /** ReqEnterGame GameID */
        GameID?: (number|null);
    }

    /** Represents a ReqEnterGame. */
    class ReqEnterGame implements IReqEnterGame {

        /**
         * Constructs a new ReqEnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IReqEnterGame);

        /** ReqEnterGame GameID. */
        public GameID: number;

        /**
         * Creates a new ReqEnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqEnterGame instance
         */
        public static create(properties?: gamecomm.IReqEnterGame): gamecomm.ReqEnterGame;

        /**
         * Encodes the specified ReqEnterGame message. Does not implicitly {@link gamecomm.ReqEnterGame.verify|verify} messages.
         * @param message ReqEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IReqEnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqEnterGame message, length delimited. Does not implicitly {@link gamecomm.ReqEnterGame.verify|verify} messages.
         * @param message ReqEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IReqEnterGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ReqEnterGame;

        /**
         * Decodes a ReqEnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ReqEnterGame;

        /**
         * Verifies a ReqEnterGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqEnterGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqEnterGame
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ReqEnterGame;

        /**
         * Creates a plain object from a ReqEnterGame message. Also converts values to other types if specified.
         * @param message ReqEnterGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ReqEnterGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqEnterGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqExitGame. */
    interface IReqExitGame {

        /** ReqExitGame GameID */
        GameID?: (number|null);
    }

    /** Represents a ReqExitGame. */
    class ReqExitGame implements IReqExitGame {

        /**
         * Constructs a new ReqExitGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IReqExitGame);

        /** ReqExitGame GameID. */
        public GameID: number;

        /**
         * Creates a new ReqExitGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqExitGame instance
         */
        public static create(properties?: gamecomm.IReqExitGame): gamecomm.ReqExitGame;

        /**
         * Encodes the specified ReqExitGame message. Does not implicitly {@link gamecomm.ReqExitGame.verify|verify} messages.
         * @param message ReqExitGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IReqExitGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqExitGame message, length delimited. Does not implicitly {@link gamecomm.ReqExitGame.verify|verify} messages.
         * @param message ReqExitGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IReqExitGame, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqExitGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqExitGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ReqExitGame;

        /**
         * Decodes a ReqExitGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqExitGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ReqExitGame;

        /**
         * Verifies a ReqExitGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqExitGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqExitGame
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ReqExitGame;

        /**
         * Creates a plain object from a ReqExitGame message. Also converts values to other types if specified.
         * @param message ReqExitGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ReqExitGame, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqExitGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReqChangeTable. */
    interface IReqChangeTable {

        /** ReqChangeTable GameID */
        GameID?: (number|null);
    }

    /** Represents a ReqChangeTable. */
    class ReqChangeTable implements IReqChangeTable {

        /**
         * Constructs a new ReqChangeTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IReqChangeTable);

        /** ReqChangeTable GameID. */
        public GameID: number;

        /**
         * Creates a new ReqChangeTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReqChangeTable instance
         */
        public static create(properties?: gamecomm.IReqChangeTable): gamecomm.ReqChangeTable;

        /**
         * Encodes the specified ReqChangeTable message. Does not implicitly {@link gamecomm.ReqChangeTable.verify|verify} messages.
         * @param message ReqChangeTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IReqChangeTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReqChangeTable message, length delimited. Does not implicitly {@link gamecomm.ReqChangeTable.verify|verify} messages.
         * @param message ReqChangeTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IReqChangeTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReqChangeTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReqChangeTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.ReqChangeTable;

        /**
         * Decodes a ReqChangeTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReqChangeTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.ReqChangeTable;

        /**
         * Verifies a ReqChangeTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReqChangeTable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReqChangeTable
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.ReqChangeTable;

        /**
         * Creates a plain object from a ReqChangeTable message. Also converts values to other types if specified.
         * @param message ReqChangeTable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.ReqChangeTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReqChangeTable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotifyChangeGold. */
    interface INotifyChangeGold {

        /** NotifyChangeGold UserID */
        UserID?: (number|Long|null);

        /** NotifyChangeGold Gold */
        Gold?: (number|Long|null);

        /** NotifyChangeGold Code */
        Code?: (number|null);
    }

    /** Represents a NotifyChangeGold. */
    class NotifyChangeGold implements INotifyChangeGold {

        /**
         * Constructs a new NotifyChangeGold.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.INotifyChangeGold);

        /** NotifyChangeGold UserID. */
        public UserID: (number|Long);

        /** NotifyChangeGold Gold. */
        public Gold: (number|Long);

        /** NotifyChangeGold Code. */
        public Code: number;

        /**
         * Creates a new NotifyChangeGold instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyChangeGold instance
         */
        public static create(properties?: gamecomm.INotifyChangeGold): gamecomm.NotifyChangeGold;

        /**
         * Encodes the specified NotifyChangeGold message. Does not implicitly {@link gamecomm.NotifyChangeGold.verify|verify} messages.
         * @param message NotifyChangeGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.INotifyChangeGold, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyChangeGold message, length delimited. Does not implicitly {@link gamecomm.NotifyChangeGold.verify|verify} messages.
         * @param message NotifyChangeGold message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.INotifyChangeGold, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyChangeGold message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyChangeGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.NotifyChangeGold;

        /**
         * Decodes a NotifyChangeGold message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyChangeGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.NotifyChangeGold;

        /**
         * Verifies a NotifyChangeGold message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyChangeGold message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyChangeGold
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.NotifyChangeGold;

        /**
         * Creates a plain object from a NotifyChangeGold message. Also converts values to other types if specified.
         * @param message NotifyChangeGold
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.NotifyChangeGold, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyChangeGold to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MoneyCalculateInfo. */
    interface IMoneyCalculateInfo {

        /** MoneyCalculateInfo UserID */
        UserID?: (number|Long|null);

        /** MoneyCalculateInfo Money */
        Money?: (number|Long|null);

        /** MoneyCalculateInfo ChangeValue */
        ChangeValue?: (number|Long|null);

        /** MoneyCalculateInfo Reason */
        Reason?: (string|null);
    }

    /** Represents a MoneyCalculateInfo. */
    class MoneyCalculateInfo implements IMoneyCalculateInfo {

        /**
         * Constructs a new MoneyCalculateInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IMoneyCalculateInfo);

        /** MoneyCalculateInfo UserID. */
        public UserID: (number|Long);

        /** MoneyCalculateInfo Money. */
        public Money: (number|Long);

        /** MoneyCalculateInfo ChangeValue. */
        public ChangeValue: (number|Long);

        /** MoneyCalculateInfo Reason. */
        public Reason: string;

        /**
         * Creates a new MoneyCalculateInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoneyCalculateInfo instance
         */
        public static create(properties?: gamecomm.IMoneyCalculateInfo): gamecomm.MoneyCalculateInfo;

        /**
         * Encodes the specified MoneyCalculateInfo message. Does not implicitly {@link gamecomm.MoneyCalculateInfo.verify|verify} messages.
         * @param message MoneyCalculateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IMoneyCalculateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoneyCalculateInfo message, length delimited. Does not implicitly {@link gamecomm.MoneyCalculateInfo.verify|verify} messages.
         * @param message MoneyCalculateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IMoneyCalculateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoneyCalculateInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoneyCalculateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.MoneyCalculateInfo;

        /**
         * Decodes a MoneyCalculateInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoneyCalculateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.MoneyCalculateInfo;

        /**
         * Verifies a MoneyCalculateInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MoneyCalculateInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoneyCalculateInfo
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.MoneyCalculateInfo;

        /**
         * Creates a plain object from a MoneyCalculateInfo message. Also converts values to other types if specified.
         * @param message MoneyCalculateInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.MoneyCalculateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MoneyCalculateInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateReady. */
    interface IStateReady {

        /** StateReady Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StateReady. */
    class StateReady implements IStateReady {

        /**
         * Constructs a new StateReady.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateReady);

        /** StateReady Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StateReady instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateReady instance
         */
        public static create(properties?: gamecomm.IStateReady): gamecomm.StateReady;

        /**
         * Encodes the specified StateReady message. Does not implicitly {@link gamecomm.StateReady.verify|verify} messages.
         * @param message StateReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateReady message, length delimited. Does not implicitly {@link gamecomm.StateReady.verify|verify} messages.
         * @param message StateReady message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateReady, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateReady message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateReady;

        /**
         * Decodes a StateReady message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateReady
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateReady;

        /**
         * Verifies a StateReady message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateReady message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateReady
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateReady;

        /**
         * Creates a plain object from a StateReady message. Also converts values to other types if specified.
         * @param message StateReady
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateReady, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateReady to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateFree. */
    interface IStateFree {

        /** StateFree Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StateFree. */
    class StateFree implements IStateFree {

        /**
         * Constructs a new StateFree.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateFree);

        /** StateFree Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StateFree instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateFree instance
         */
        public static create(properties?: gamecomm.IStateFree): gamecomm.StateFree;

        /**
         * Encodes the specified StateFree message. Does not implicitly {@link gamecomm.StateFree.verify|verify} messages.
         * @param message StateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateFree message, length delimited. Does not implicitly {@link gamecomm.StateFree.verify|verify} messages.
         * @param message StateFree message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateFree, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateFree message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateFree;

        /**
         * Decodes a StateFree message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateFree
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateFree;

        /**
         * Verifies a StateFree message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateFree message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateFree
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateFree;

        /**
         * Creates a plain object from a StateFree message. Also converts values to other types if specified.
         * @param message StateFree
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateFree, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateFree to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateStart. */
    interface IStateStart {

        /** StateStart Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StateStart. */
    class StateStart implements IStateStart {

        /**
         * Constructs a new StateStart.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateStart);

        /** StateStart Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StateStart instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateStart instance
         */
        public static create(properties?: gamecomm.IStateStart): gamecomm.StateStart;

        /**
         * Encodes the specified StateStart message. Does not implicitly {@link gamecomm.StateStart.verify|verify} messages.
         * @param message StateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateStart message, length delimited. Does not implicitly {@link gamecomm.StateStart.verify|verify} messages.
         * @param message StateStart message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateStart, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateStart message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateStart;

        /**
         * Decodes a StateStart message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateStart;

        /**
         * Verifies a StateStart message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateStart message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateStart
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateStart;

        /**
         * Creates a plain object from a StateStart message. Also converts values to other types if specified.
         * @param message StateStart
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateStart, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateStart to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StatePlaying. */
    interface IStatePlaying {

        /** StatePlaying Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StatePlaying. */
    class StatePlaying implements IStatePlaying {

        /**
         * Constructs a new StatePlaying.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStatePlaying);

        /** StatePlaying Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StatePlaying instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StatePlaying instance
         */
        public static create(properties?: gamecomm.IStatePlaying): gamecomm.StatePlaying;

        /**
         * Encodes the specified StatePlaying message. Does not implicitly {@link gamecomm.StatePlaying.verify|verify} messages.
         * @param message StatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StatePlaying message, length delimited. Does not implicitly {@link gamecomm.StatePlaying.verify|verify} messages.
         * @param message StatePlaying message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStatePlaying, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StatePlaying message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StatePlaying;

        /**
         * Decodes a StatePlaying message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StatePlaying
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StatePlaying;

        /**
         * Verifies a StatePlaying message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StatePlaying message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StatePlaying
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StatePlaying;

        /**
         * Creates a plain object from a StatePlaying message. Also converts values to other types if specified.
         * @param message StatePlaying
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StatePlaying, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StatePlaying to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateOver. */
    interface IStateOver {

        /** StateOver Times */
        Times?: (gamecomm.ITimeInfo|null);
    }

    /** Represents a StateOver. */
    class StateOver implements IStateOver {

        /**
         * Constructs a new StateOver.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateOver);

        /** StateOver Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /**
         * Creates a new StateOver instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateOver instance
         */
        public static create(properties?: gamecomm.IStateOver): gamecomm.StateOver;

        /**
         * Encodes the specified StateOver message. Does not implicitly {@link gamecomm.StateOver.verify|verify} messages.
         * @param message StateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateOver message, length delimited. Does not implicitly {@link gamecomm.StateOver.verify|verify} messages.
         * @param message StateOver message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateOver, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateOver message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateOver;

        /**
         * Decodes a StateOver message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateOver;

        /**
         * Verifies a StateOver message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateOver message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateOver
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateOver;

        /**
         * Creates a plain object from a StateOver message. Also converts values to other types if specified.
         * @param message StateOver
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateOver, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateOver to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StateCall. */
    interface IStateCall {

        /** StateCall Times */
        Times?: (gamecomm.ITimeInfo|null);

        /** StateCall UserID */
        UserID?: (number|Long|null);
    }

    /** Represents a StateCall. */
    class StateCall implements IStateCall {

        /**
         * Constructs a new StateCall.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IStateCall);

        /** StateCall Times. */
        public Times?: (gamecomm.ITimeInfo|null);

        /** StateCall UserID. */
        public UserID: (number|Long);

        /**
         * Creates a new StateCall instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StateCall instance
         */
        public static create(properties?: gamecomm.IStateCall): gamecomm.StateCall;

        /**
         * Encodes the specified StateCall message. Does not implicitly {@link gamecomm.StateCall.verify|verify} messages.
         * @param message StateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IStateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StateCall message, length delimited. Does not implicitly {@link gamecomm.StateCall.verify|verify} messages.
         * @param message StateCall message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IStateCall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StateCall message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.StateCall;

        /**
         * Decodes a StateCall message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StateCall
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.StateCall;

        /**
         * Verifies a StateCall message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StateCall message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StateCall
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.StateCall;

        /**
         * Creates a plain object from a StateCall message. Also converts values to other types if specified.
         * @param message StateCall
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.StateCall, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StateCall to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Host. */
    interface IHost {

        /** Host IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a Host. */
    class Host implements IHost {

        /**
         * Constructs a new Host.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IHost);

        /** Host IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new Host instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Host instance
         */
        public static create(properties?: gamecomm.IHost): gamecomm.Host;

        /**
         * Encodes the specified Host message. Does not implicitly {@link gamecomm.Host.verify|verify} messages.
         * @param message Host message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Host message, length delimited. Does not implicitly {@link gamecomm.Host.verify|verify} messages.
         * @param message Host message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IHost, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Host message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Host
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.Host;

        /**
         * Decodes a Host message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Host
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.Host;

        /**
         * Verifies a Host message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Host message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Host
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.Host;

        /**
         * Creates a plain object from a Host message. Also converts values to other types if specified.
         * @param message Host
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.Host, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Host to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HostEx. */
    interface IHostEx {

        /** HostEx IsWant */
        IsWant?: (boolean|null);
    }

    /** Represents a HostEx. */
    class HostEx implements IHostEx {

        /**
         * Constructs a new HostEx.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IHostEx);

        /** HostEx IsWant. */
        public IsWant: boolean;

        /**
         * Creates a new HostEx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HostEx instance
         */
        public static create(properties?: gamecomm.IHostEx): gamecomm.HostEx;

        /**
         * Encodes the specified HostEx message. Does not implicitly {@link gamecomm.HostEx.verify|verify} messages.
         * @param message HostEx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IHostEx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HostEx message, length delimited. Does not implicitly {@link gamecomm.HostEx.verify|verify} messages.
         * @param message HostEx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IHostEx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HostEx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HostEx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.HostEx;

        /**
         * Decodes a HostEx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HostEx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.HostEx;

        /**
         * Verifies a HostEx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HostEx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HostEx
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.HostEx;

        /**
         * Creates a plain object from a HostEx message. Also converts values to other types if specified.
         * @param message HostEx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.HostEx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HostEx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Call. */
    interface ICall {

        /** Call UserID */
        UserID?: (number|Long|null);

        /** Call Score */
        Score?: (number|null);
    }

    /** Represents a Call. */
    class Call implements ICall {

        /**
         * Constructs a new Call.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.ICall);

        /** Call UserID. */
        public UserID: (number|Long);

        /** Call Score. */
        public Score: number;

        /**
         * Creates a new Call instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Call instance
         */
        public static create(properties?: gamecomm.ICall): gamecomm.Call;

        /**
         * Encodes the specified Call message. Does not implicitly {@link gamecomm.Call.verify|verify} messages.
         * @param message Call message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Call message, length delimited. Does not implicitly {@link gamecomm.Call.verify|verify} messages.
         * @param message Call message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.ICall, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Call message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.Call;

        /**
         * Decodes a Call message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Call
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.Call;

        /**
         * Verifies a Call message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Call message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Call
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.Call;

        /**
         * Creates a plain object from a Call message. Also converts values to other types if specified.
         * @param message Call
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.Call, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Call to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BeOut. */
    interface IBeOut {

        /** BeOut UserID */
        UserID?: (number|Long|null);

        /** BeOut Code */
        Code?: (number|null);

        /** BeOut Hints */
        Hints?: (Uint8Array|null);
    }

    /** Represents a BeOut. */
    class BeOut implements IBeOut {

        /**
         * Constructs a new BeOut.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IBeOut);

        /** BeOut UserID. */
        public UserID: (number|Long);

        /** BeOut Code. */
        public Code: number;

        /** BeOut Hints. */
        public Hints: Uint8Array;

        /**
         * Creates a new BeOut instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BeOut instance
         */
        public static create(properties?: gamecomm.IBeOut): gamecomm.BeOut;

        /**
         * Encodes the specified BeOut message. Does not implicitly {@link gamecomm.BeOut.verify|verify} messages.
         * @param message BeOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IBeOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BeOut message, length delimited. Does not implicitly {@link gamecomm.BeOut.verify|verify} messages.
         * @param message BeOut message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IBeOut, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BeOut message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.BeOut;

        /**
         * Decodes a BeOut message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BeOut
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.BeOut;

        /**
         * Verifies a BeOut message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BeOut message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BeOut
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.BeOut;

        /**
         * Creates a plain object from a BeOut message. Also converts values to other types if specified.
         * @param message BeOut
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.BeOut, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BeOut to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Bet. */
    interface IBet {

        /** Bet AreaId */
        AreaId?: (number|null);

        /** Bet Money */
        Money?: (number|Long|null);
    }

    /** Represents a Bet. */
    class Bet implements IBet {

        /**
         * Constructs a new Bet.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IBet);

        /** Bet AreaId. */
        public AreaId: number;

        /** Bet Money. */
        public Money: (number|Long);

        /**
         * Creates a new Bet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Bet instance
         */
        public static create(properties?: gamecomm.IBet): gamecomm.Bet;

        /**
         * Encodes the specified Bet message. Does not implicitly {@link gamecomm.Bet.verify|verify} messages.
         * @param message Bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IBet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Bet message, length delimited. Does not implicitly {@link gamecomm.Bet.verify|verify} messages.
         * @param message Bet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IBet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Bet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.Bet;

        /**
         * Decodes a Bet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Bet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.Bet;

        /**
         * Verifies a Bet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Bet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Bet
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.Bet;

        /**
         * Creates a plain object from a Bet message. Also converts values to other types if specified.
         * @param message Bet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.Bet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Bet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BetResult. */
    interface IBetResult {

        /** BetResult UserId */
        UserId?: (number|Long|null);

        /** BetResult AreaId */
        AreaId?: (number|null);

        /** BetResult Money */
        Money?: (number|Long|null);
    }

    /** Represents a BetResult. */
    class BetResult implements IBetResult {

        /**
         * Constructs a new BetResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IBetResult);

        /** BetResult UserId. */
        public UserId: (number|Long);

        /** BetResult AreaId. */
        public AreaId: number;

        /** BetResult Money. */
        public Money: (number|Long);

        /**
         * Creates a new BetResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BetResult instance
         */
        public static create(properties?: gamecomm.IBetResult): gamecomm.BetResult;

        /**
         * Encodes the specified BetResult message. Does not implicitly {@link gamecomm.BetResult.verify|verify} messages.
         * @param message BetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BetResult message, length delimited. Does not implicitly {@link gamecomm.BetResult.verify|verify} messages.
         * @param message BetResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IBetResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BetResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.BetResult;

        /**
         * Decodes a BetResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BetResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.BetResult;

        /**
         * Verifies a BetResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BetResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BetResult
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.BetResult;

        /**
         * Creates a plain object from a BetResult message. Also converts values to other types if specified.
         * @param message BetResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.BetResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BetResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PlayerRecord. */
    interface IPlayerRecord {

        /** PlayerRecord User */
        User?: (gamecomm.IPlayerInfo|null);

        /** PlayerRecord Twice */
        Twice?: (number|null);

        /** PlayerRecord Ranking */
        Ranking?: (number|null);

        /** PlayerRecord Bankroll */
        Bankroll?: (number|null);

        /** PlayerRecord WinLos */
        WinLos?: (number|Long|null);
    }

    /** Represents a PlayerRecord. */
    class PlayerRecord implements IPlayerRecord {

        /**
         * Constructs a new PlayerRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IPlayerRecord);

        /** PlayerRecord User. */
        public User?: (gamecomm.IPlayerInfo|null);

        /** PlayerRecord Twice. */
        public Twice: number;

        /** PlayerRecord Ranking. */
        public Ranking: number;

        /** PlayerRecord Bankroll. */
        public Bankroll: number;

        /** PlayerRecord WinLos. */
        public WinLos: (number|Long);

        /**
         * Creates a new PlayerRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PlayerRecord instance
         */
        public static create(properties?: gamecomm.IPlayerRecord): gamecomm.PlayerRecord;

        /**
         * Encodes the specified PlayerRecord message. Does not implicitly {@link gamecomm.PlayerRecord.verify|verify} messages.
         * @param message PlayerRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IPlayerRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PlayerRecord message, length delimited. Does not implicitly {@link gamecomm.PlayerRecord.verify|verify} messages.
         * @param message PlayerRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IPlayerRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PlayerRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.PlayerRecord;

        /**
         * Decodes a PlayerRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PlayerRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.PlayerRecord;

        /**
         * Verifies a PlayerRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PlayerRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PlayerRecord
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.PlayerRecord;

        /**
         * Creates a plain object from a PlayerRecord message. Also converts values to other types if specified.
         * @param message PlayerRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.PlayerRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PlayerRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRecord. */
    interface IGameRecord {

        /** GameRecord Pork */
        Pork?: (Uint8Array|null);

        /** GameRecord Type */
        Type?: (number|null);

        /** GameRecord isWon */
        isWon?: (boolean|null);
    }

    /** Represents a GameRecord. */
    class GameRecord implements IGameRecord {

        /**
         * Constructs a new GameRecord.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameRecord);

        /** GameRecord Pork. */
        public Pork: Uint8Array;

        /** GameRecord Type. */
        public Type: number;

        /** GameRecord isWon. */
        public isWon: boolean;

        /**
         * Creates a new GameRecord instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRecord instance
         */
        public static create(properties?: gamecomm.IGameRecord): gamecomm.GameRecord;

        /**
         * Encodes the specified GameRecord message. Does not implicitly {@link gamecomm.GameRecord.verify|verify} messages.
         * @param message GameRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRecord message, length delimited. Does not implicitly {@link gamecomm.GameRecord.verify|verify} messages.
         * @param message GameRecord message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameRecord, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRecord message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameRecord;

        /**
         * Decodes a GameRecord message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameRecord;

        /**
         * Verifies a GameRecord message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRecord message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRecord
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameRecord;

        /**
         * Creates a plain object from a GameRecord message. Also converts values to other types if specified.
         * @param message GameRecord
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRecord to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRecordList. */
    interface IGameRecordList {

        /** GameRecordList list */
        list?: (gamecomm.IGameRecord[]|null);
    }

    /** Represents a GameRecordList. */
    class GameRecordList implements IGameRecordList {

        /**
         * Constructs a new GameRecordList.
         * @param [properties] Properties to set
         */
        constructor(properties?: gamecomm.IGameRecordList);

        /** GameRecordList list. */
        public list: gamecomm.IGameRecord[];

        /**
         * Creates a new GameRecordList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRecordList instance
         */
        public static create(properties?: gamecomm.IGameRecordList): gamecomm.GameRecordList;

        /**
         * Encodes the specified GameRecordList message. Does not implicitly {@link gamecomm.GameRecordList.verify|verify} messages.
         * @param message GameRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gamecomm.IGameRecordList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRecordList message, length delimited. Does not implicitly {@link gamecomm.GameRecordList.verify|verify} messages.
         * @param message GameRecordList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gamecomm.IGameRecordList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRecordList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gamecomm.GameRecordList;

        /**
         * Decodes a GameRecordList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRecordList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gamecomm.GameRecordList;

        /**
         * Verifies a GameRecordList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRecordList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRecordList
         */
        public static fromObject(object: { [k: string]: any }): gamecomm.GameRecordList;

        /**
         * Creates a plain object from a GameRecordList message. Also converts values to other types if specified.
         * @param message GameRecordList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gamecomm.GameRecordList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRecordList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}