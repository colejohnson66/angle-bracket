import InsertionMode from "./ParseMode";
import Tokenizer from "../tokenizer/Tokenizer";
import TokenizerState from "../tokenizer/TokenizerState";

const defaultOptions = {
    scripting: false,
    onParseError: null
};

class Parser {
    private options: Object;
    private tokenizer: Tokenizer;

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
