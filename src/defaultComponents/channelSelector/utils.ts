import { parseToRgba, readableColorIsBlack } from "color2k";

export function IsBlackReadable(color: string) {
    try {
        const rgba = parseToRgba(color);
        const r = rgba[0];
        const g = rgba[1];
        const b = rgba[2];
        const displayGamma = 2.2;
        const backgroundWeight =
            0.2126 * Math.pow(r / 255.0, displayGamma) +
            0.7152 * Math.pow(g / 255.0, displayGamma) +
            0.0722 * Math.pow(b / 255.0, displayGamma);
        return backgroundWeight > Math.pow(0.5, displayGamma);
    } catch {
        // Fallback to other implementation
    }

    try {
        return readableColorIsBlack(color);
    } catch (error) {
        // tslint:disable-next-line: no-console
        console.error(`Error while checking readable color for '${color}'`, error);
    }
    return false;
}

export function getChannelDirection(channelRestrictions: { read: boolean, write: boolean }): string {
    if (!channelRestrictions) {
        return "";
    }
    if (typeof channelRestrictions.read === "boolean" && typeof channelRestrictions.write === "boolean") {
        if (channelRestrictions.read && channelRestrictions.write) {
            return "";
        }
        if (channelRestrictions.read) {
            return "subscribe";
        }
        if (channelRestrictions.write) {
            return "publish"
        }
        return "";
    } else {
        return "";
    }
};