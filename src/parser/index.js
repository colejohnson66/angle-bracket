import InsertionMode from "./mode";
import Tokenizer from "../tokenizer";
import TokenizerState from "../tokenizer/state";

const defaultOptions = {
    scripting: false,
    onParseError: null
};

class Parser {
    construction(options) {
        if (options)
            this.options = { ...defaultOptions, ...options };
        else
            this.options = defaultOptions;

        this.tokenizer = new Tokenizer();
    }

    parse(html) {

    }
}

export default Parser;
