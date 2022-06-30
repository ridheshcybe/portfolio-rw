import color from "colors-cli";

export function warn(str: string) {
  console.log(`${color.blue("[Warn]")} ${color.yellow(str)}`);
}

export function notice(str: string) {
  console.log(`${color.blue("[Notice]")} ${color.blue_bt(str)}`);
}

export function error(str: string) {
  console.error(`${color.red_bbt("[Error]")} ${color.red_bt(str)}`);
}

export default {
  warn,
  error,
  notice,
};
