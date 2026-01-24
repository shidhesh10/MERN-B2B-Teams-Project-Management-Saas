import jwt, { SignOptions } from "jsonwebtoken";
import { UserDocument } from "../models/user.model"
import { config } from "../config/app.config";

export type AccessPayload = {
    userId: UserDocument["_id"];
}

type signOptsAndSecret = SignOptions & {
    secret: string;
};

const defaults: SignOptions = {
    audience: ["user"],
};

export const accessTokenSignOptions: signOptsAndSecret = {
    expiresIn: config.JWT_EXPIRES_IN as SignOptions["expiresIn"],
    secret: config.JWT_SECRET,
};

export const signJwtToken = (
    payload: AccessPayload,
    options?:signOptsAndSecret
) => {
    const {secret, ...opts } = options || accessTokenSignOptions;
    return jwt.sign(payload, secret, {
        ...defaults,
        ...opts,
    });
};