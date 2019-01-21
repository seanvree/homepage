
// This script is derived from this GitHub project: https://github.com/cadejscroggins/tilde

$(function () {

    const CONFIG = {

        /*
        * When using commands you MUST select the result from the suggestions result list below the input field.
        * Google Search will ALWAYS be used when pressing the ENTER key or clicking search.
        * The category, name, key, url, search path and color for your commands.
        * If none of the specified keys are matched, the '*' key is used.

        * To invoke the HELP menu, press the "?" key.
        * NOTE: the HELP menu will not appear on mobile browsers.

        * Commands without a category don't show up in the help menu.
        */

        commands: [{
                name: 'Google',
                key: '*',
                url: 'https://encrypted.google.com',
                search: '/search?q={}',
                color: '#1e272e',
            },
            {
                category: 'Work',
                name: 'Drive',
                key: 'd',
                url: 'https://drive.google.com',
                search: '/drive/search?q={}',
                color: 'linear-gradient(135deg, #4285f4, #4259f4)',
            },
            {
                category: 'Work',
                name: 'GitHub',
                key: 'g',
                url: 'https://github.com',
                search: '/search?q={}',
                color: 'linear-gradient(135deg, #2b2b2b, #3b3b3b)',
            },
            {
                category: 'Work',
                name: 'Keep',
                key: 'k',
                url: 'https://keep.google.com',
                search: '/#search/text={}',
                color: 'linear-gradient(135deg, #fca550, #fcd050)',
            },
            {
                category: 'Lurk',
                name: 'Hunt',
                key: 'p',
                url: 'https://www.producthunt.com',
                search: '/search?q={}',
                color: 'linear-gradient(135deg, #da552f, #da802f)',
            },
            {
                category: 'Lurk',
                name: 'Reddit',
                key: 'r',
                url: 'https://www.reddit.com',
                search: '/search?q={}',
                color: 'linear-gradient(135deg, #5f99cf, #5f7dcf)',
            },
            {
                category: 'Lurk',
                name: 'Unsplash',
                key: 'u',
                url: 'https://unsplash.com/new',
                search: '/search/{}',
                color: '#000',
            },
            {
                category: 'Listen',
                name: 'Hypem',
                key: 'h',
                url: 'https://hypem.com/popular',
                search: '/search/{}',
                color: 'linear-gradient(135deg, #83c441, #62c441)',
            },
            {
                category: 'Listen',
                name: 'Line Radio',
                key: 'l',
                url: 'https://linerad.io',
                search: '/#{}',
                color: 'linear-gradient(135deg, #a29bfe, #bb9bfe)',
            },
            {
                category: 'Listen',
                name: 'SoundCloud',
                key: 's',
                url: 'https://soundcloud.com/discover',
                search: '/search?q={}',
                color: 'linear-gradient(135deg, #ff8800, #ffc800)',
            },
            {
                category: 'Watch',
                name: 'Netflix',
                key: 'n',
                url: 'https://www.netflix.com/browse',
                search: '/search?q={}',
                color: 'linear-gradient(135deg, #e50914, #e53509)',
            },
            {
                category: 'Watch',
                name: 'Twitch',
                key: 't',
                url: 'https://www.twitch.tv/directory/following',
                color: 'linear-gradient(135deg, #6441a5, #7d41a5)',
            },
            {
                category: 'Watch',
                name: 'YouTube',
                key: 'y',
                url: 'https://youtube.com/feed/subscriptions',
                search: '/results?search_query={}',
                color: 'linear-gradient(135deg, #cd201f, #cd4c1f)',
            },
            {
                category: 'Learn',
                name: 'Academy',
                key: 'a',
                url: 'https://www.khanacademy.org',
                search: '/search?page_search_query={}',
                color: 'linear-gradient(135deg, #9cb443, #80b443)',
            },
            {
                category: 'Learn',
                name: 'Coursera',
                key: 'c',
                url: 'https://www.coursera.org',
                search: '/courses?query={}',
                color: 'linear-gradient(135deg, #407ED7, #4058d7)',
            },
            {
                category: 'Learn',
                name: 'Egghead',
                key: 'e',
                url: 'https://egghead.io',
                search: '/search?q={}',
                color: 'linear-gradient(135deg, #171C23, #171923)',
            },
            {
                category: 'Download',
                name: '7digital',
                key: '7',
                url: 'https://us.7digital.com',
                search: '/search?q={}',
                color: 'linear-gradient(135deg, #07606e, #07466e)',
            },
            {
                category: 'Download',
                name: 'Bay',
                key: 'b',
                url: 'https://thepiratebay.org',
                search: '/search/{}',
                color: 'linear-gradient(135deg, #d2b9a6, #d2c4a6)',
            },
            {
                category: 'Download',
                name: 'YTS',
                key: 'Y',
                url: 'https://yts.am/browse-movies/all/1080p/all/7/latest',
                search: '/browse-movies/{}',
                color: 'linear-gradient(135deg, #2f2f2f, #373737)',
            },
        ],

        //  * Get suggestions "live search" as you type.

        suggestions: true,
        suggestionsLimit: 4,
        
        /*          
        * The "influencer" is how the live search aggrogates results while typing.
        * These results come from DuckDuckGo which uses the Google API and will direct the user to google when a result is clicked.
        */

        influencers: [
            {
                name: 'DuckDuckGo',
                limit: 4
            },
        ],

        /*          
        * Instantly redirect when a key is matched. Put a space before any other
        * queries to prevent unwanted redirects. 
        */
         
        instantRedirect: false,

        /*
        * Open triggered queries in a new tab.
        */

        newTab: false,

        /*         
        * The delimiter between a command key and your search query. For example,
        * to search GitHub for potatoes, you'd type "g:potatoes". 
        */

        searchDelimiter: ':',

        /*          
        * The delimiter between a command key and a path. For example, you'd type
        * "r/r/unixporn" to go to "https://reddit.com/r/unixporn". 
        */

        pathDelimiter: '/',

    };

    const $ = {
        bodyClassAdd: c => $.el('body').classList.add(c),
        bodyClassRemove: c => $.el('body').classList.remove(c),
        el: s => document.querySelector(s),
        els: s => [].slice.call(document.querySelectorAll(s) || []),
        escapeRegex: s => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'),
        flattenAndUnique: arr => [...new Set([].concat.apply([], arr))],
        ieq: (a, b) => a.toLowerCase() === b.toLowerCase(),
        iin: (a, b) => a.toLowerCase().indexOf(b.toLowerCase()) !== -1,
        isDown: e => ['c-n', 'down', 'tab'].includes($.key(e)),
        isRemove: e => ['backspace', 'delete'].includes($.key(e)),
        isUp: e => ['c-p', 'up', 's-tab'].includes($.key(e)),

        jsonp: url => {
            let script = document.createElement('script');
            script.src = url;
            $.el('head').appendChild(script);
        },

        key: e => {
        const ctrl = e.ctrlKey;
        const shift = e.shiftKey;

            switch (e.which) {
                case 8:
                return 'backspace';
                case 9:
                return shift ? 's-tab' : 'tab';
                case 13:
                return 'enter';
                case 16:
                return 'shift';
                case 17:
                return 'ctrl';
                case 18:
                return 'alt';
                case 27:
                return 'escape';
                case 38:
                return 'up';
                case 40:
                return 'down';
                case 46:
                return 'delete';
                case 78:
                return ctrl ? 'c-n' : 'n';
                case 80:
                return ctrl ? 'c-p' : 'p';
                case 91:
                case 93:
                case 224:
                return 'super';
            }
        },

        pad: v => ('0' + v.toString()).slice(-2),
    };

	class Help {
        constructor(options) {
            this._el = $.el('#help');
            this._commands = options.commands;
            this._newTab = options.newTab;
            this._toggled = false;
            this._handleKeydown = this._handleKeydown.bind(this);
            this.toggle = this.toggle.bind(this);
            this._buildAndAppendLists();
            this._registerEvents();
        }

        toggle(show) {
            this._toggled = typeof show !== 'undefined' ? show : !this._toggled;
            this._toggled ? $.bodyClassAdd('help') : $.bodyClassRemove('help');
        }

        _buildAndAppendLists() {
            const lists = document.createElement('ul');
            lists.classList.add('categories');

            this._getCategories().forEach(category => {
                lists.insertAdjacentHTML(
                    'beforeend',
                    `<li class="category">
                        <h2 class="category-name">${category}</h2>
                        <ul>${this._buildListCommands(category)}</ul>
                    </li>`
                );
            });

            this._el.appendChild(lists);
        }

        _buildListCommands(currentCategory) {
            return this._commands
                .map(({
                    category,
                    name,
                    key,
                    url
                }) => {
                    if (category === currentCategory) {
                        return `
                <li class="command">
                    <a href="${url}" target="${this._newTab ? '_blank' : '_self'}">
                    <span class="command-key">${key}</span>
                    <span class="command-name" title="${url}">${name}</span>
                    </a>
                </li>
                `;
                    }
                })
                .join('');
        }

        _getCategories() {
            const categories = this._commands
                .map(v => v.category)
                .filter(category => category);

            return [...new Set(categories)];
        }

        _handleKeydown(e) {
            if ($.key(e) === 'escape') this.toggle(false);
        }

        _registerEvents() {
            document.addEventListener('keydown', this._handleKeydown);
        }
    };
    
	class Influencer {
        constructor(options) {
            this._limit = options.limit;
            this._parseQuery = options.parseQuery;
        }

        addItem() {}
        getSuggestions() {}

        _addSearchPrefix(items, query) {
            const searchPrefix = this._getSearchPrefix(query);
            return items.map(s => (searchPrefix ? searchPrefix + s : s));
        }

        _getSearchPrefix(query) {
            const {
                isSearch,
                key,
                split
            } = this._parseQuery(query);
            return isSearch ? `${key}${split} ` : false;
        }
    };

    class DuckDuckGoInfluencer extends Influencer {
        constructor({
            queryParser
        }) {
            super(...arguments);
        }

        getSuggestions(rawQuery) {
            const {
                query
            } = this._parseQuery(rawQuery);
            if (!query) return Promise.resolve([]);

            return new Promise(resolve => {
                const endpoint = 'https://duckduckgo.com/ac/';
                const callback = 'autocompleteCallback';

                window[callback] = res => {
                    const suggestions = res
                        .map(i => i.phrase)
                        .filter(s => !$.ieq(s, query))
                        .slice(0, this._limit);

                    resolve(this._addSearchPrefix(suggestions, rawQuery));
                };

                $.jsonp(`${endpoint}?callback=${callback}&q=${query}`);
            });
        }
    };

    class Suggester {
        constructor(options) {
            this._el = $.el('#search-suggestions');
            this._enabled = options.enabled;
            this._influencers = options.influencers;
            this._limit = options.limit;
            this._suggestionEls = [];
            this._handleKeydown = this._handleKeydown.bind(this);
            this._registerEvents();
        }

        setOnClick(callback) {
            this._onClick = callback;
        }

        setOnHighlight(callback) {
            this._onHighlight = callback;
        }

        setOnUnhighlight(callback) {
            this._onUnhighlight = callback;
        }

        success(query) {
            this._clearSuggestions();
            this._influencers.forEach(i => i.addItem(query));
        }

        suggest(input) {
            if (!this._enabled) return;
            input = input.trim();
            if (input === '') this._clearSuggestions();

            Promise.all(this._getInfluencerPromises(input)).then(res => {
                const suggestions = $.flattenAndUnique(res);
                this._clearSuggestions();

                if (suggestions.length) {
                    this._appendSuggestions(suggestions, input);
                    this._registerSuggestionHighlightEvents();
                    this._registerSuggestionClickEvents();
                    $.bodyClassAdd('suggestions');
                }
            });
        }

        _appendSuggestions(suggestions, input) {
            suggestions.some((suggestion, i) => {
                const match = new RegExp($.escapeRegex(input), 'ig');
                const suggestionHtml = suggestion.replace(match, `<b>${input}</b>`);

                this._el.insertAdjacentHTML(
                    'beforeend',
                    `<li>
        <button
            type="button"
            class="js-search-suggestion search-suggestion"
            data-suggestion="${suggestion}"
            tabindex="-1"
        >
            ${suggestionHtml}
        </button>
        </li>`
                );

                if (i + 1 >= this._limit) return true;
            });

            this._suggestionEls = $.els('.js-search-suggestion');
        }

        _clearSuggestionClickEvents() {
            this._suggestionEls.forEach(el => {
                el.removeEventListener('click', this._onClick);
            });
        }

        _clearSuggestionHighlightEvents() {
            this._suggestionEls.forEach(el => {
                el.removeEventListener('mouseover', this._highlight);
                el.removeEventListener('mouseout', this._unHighlight);
            });
        }

        _clearSuggestions() {
            $.bodyClassRemove('suggestions');
            this._clearSuggestionHighlightEvents();
            this._clearSuggestionClickEvents();
            this._suggestionEls = [];
            this._el.innerHTML = '';
        }

        _focusNext(e) {
            const exists = this._suggestionEls.some((el, i) => {
                if (el.classList.contains('highlight')) {
                    this._highlight(this._suggestionEls[i + 1], e);
                    return true;
                }
            });

            if (!exists) this._highlight(this._suggestionEls[0], e);
        }

        _focusPrevious(e) {
            const exists = this._suggestionEls.some((el, i) => {
                if (el.classList.contains('highlight') && i) {
                    this._highlight(this._suggestionEls[i - 1], e);
                    return true;
                }
            });

            if (!exists) this._unHighlight(e);
        }

        _getInfluencerPromises(input) {
            return this._influencers.map(influencer =>
                influencer.getSuggestions(input)
            );
        }

        _handleKeydown(e) {
            if ($.isDown(e)) this._focusNext(e);
            if ($.isUp(e)) this._focusPrevious(e);
        }

        _highlight(el, e) {
            this._unHighlight();
            if (!el) return;
            this._onHighlight(el.getAttribute('data-suggestion'));
            el.classList.add('highlight');
            e.preventDefault();
        }

        _registerEvents() {
            document.addEventListener('keydown', this._handleKeydown);
        }

        _registerSuggestionClickEvents() {
            this._suggestionEls.forEach(el => {
                const value = el.getAttribute('data-suggestion');
                el.addEventListener('click', this._onClick.bind(null, value));
            });
        }

        _registerSuggestionHighlightEvents() {
            const noHighlightUntilMouseMove = () => {
                window.removeEventListener('mousemove', noHighlightUntilMouseMove);

                this._suggestionEls.forEach(el => {
                    el.addEventListener('mouseover', this._highlight.bind(this, el));
                    el.addEventListener('mouseout', this._unHighlight.bind(this));
                });
            };

            window.addEventListener('mousemove', noHighlightUntilMouseMove);
        }

        _unHighlight(e) {
            const el = $.el('.highlight');
            if (!el) return;
            this._onUnhighlight();
            el.classList.remove('highlight');
            if (e) e.preventDefault();
        }
    };
    
	class QueryParser {
        constructor(options) {
            this._commands = options.commands;
            this._searchDelimiter = options.searchDelimiter;
            this._pathDelimiter = options.pathDelimiter;
            this._protocolRegex = /^[a-zA-Z]+:\/\//i;
            this._urlRegex = /^((https?:\/\/)?[\w-]+(\.[\w-]+)+\.?(:\d+)?(\/\S*)?)$/i;
            this.parse = this.parse.bind(this);
        }

        parse(query) {
            const res = {
                query: query,
                split: null
            };

            if (this._urlRegex.test(query)) {
                const hasProtocol = this._protocolRegex.test(query);
                res.redirect = hasProtocol ? query : 'http://' + query;
            } else {
                const trimmed = query.trim();
                const splitSearch = trimmed.split(this._searchDelimiter);
                const splitPath = trimmed.split(this._pathDelimiter);

                this._commands.some(({
                    category,
                    key,
                    name,
                    search,
                    url
                }) => {
                    if (query === key) {
                        res.key = key;
                        res.isKey = true;
                        res.redirect = url;
                        return true;
                    }

                    if (splitSearch[0] === key && search) {
                        res.key = key;
                        res.isSearch = true;
                        res.split = this._searchDelimiter;
                        res.query = QueryParser._shiftAndTrim(splitSearch, res.split);
                        res.redirect = QueryParser._prepSearch(url, search, res.query);
                        return true;
                    }

                    if (splitPath[0] === key) {
                        res.key = key;
                        res.isPath = true;
                        res.split = this._pathDelimiter;
                        res.path = QueryParser._shiftAndTrim(splitPath, res.split);
                        res.redirect = QueryParser._prepPath(url, res.path);
                        return true;
                    }

                    if (key === '*') {
                        res.redirect = QueryParser._prepSearch(url, search, query);
                    }
                });
            }

            res.color = QueryParser._getColorFromUrl(this._commands, res.redirect);
            return res;
        }

        static _getColorFromUrl(commands, url) {
            const domain = new URL(url).hostname;

            return (
                commands
                .filter(c => new URL(c.url).hostname.includes(domain))
                .map(c => c.color)[0] || null
            );
        }

        static _prepPath(url, path) {
            return QueryParser._stripUrlPath(url) + '/' + path;
        }

        static _prepSearch(url, searchPath, query) {
            if (!searchPath) return url;
            const baseUrl = QueryParser._stripUrlPath(url);
            const urlQuery = encodeURIComponent(query);
            searchPath = searchPath.replace('{}', urlQuery);
            return baseUrl + searchPath;
        }

        static _shiftAndTrim(arr, delimiter) {
            arr.shift();
            return arr.join(delimiter).trim();
        }

        static _stripUrlPath(url) {
            const parser = document.createElement('a');
            parser.href = url;
            return `${parser.protocol}//${parser.hostname}`;
        }
    };
    
	class Form {
        constructor(options) {
            this._formEl = $.el('#formstretch');
            this._inputEl = $.el('#flexbox-input');
            this._inputElVal = '';
            this._instantRedirect = options.instantRedirect;
            this._newTab = options.newTab;
            this._parseQuery = options.parseQuery;
            this._suggester = options.suggester;
            this._toggleHelp = options.toggleHelp;
            this._clearPreview = this._clearPreview.bind(this);
            this._handleInput = this._handleInput.bind(this);
            this._handleKeydown = this._handleKeydown.bind(this);
            this._previewValue = this._previewValue.bind(this);
            this._submitForm = this._submitForm.bind(this);
            this._submitWithValue = this._submitWithValue.bind(this);
            this.hide = this.hide.bind(this);
            this.show = this.show.bind(this);
            this._registerEvents();
            this._loadQueryParam();
        }

        hide() {
            $.bodyClassRemove('form');
            this._inputEl.value = '';
            this._inputElVal = '';
            this._suggester.suggest('');
        }

        show() {
            $.bodyClassAdd('form');
            this._inputEl.focus();
        }

        _clearPreview() {
            this._previewValue(this._inputElVal);
            this._inputEl.focus();
        }

        _handleInput() {
            const newQuery = this._inputEl.value;
            const isHelp = newQuery === '?';
            const {
                isKey
            } = this._parseQuery(newQuery);
            this._inputElVal = newQuery;
            this._suggester.suggest(newQuery);
            if (!newQuery || isHelp) this.hide();
            if (isHelp) this._toggleHelp();
            if (this._instantRedirect && isKey) this._submitWithValue(newQuery);
        }

        _handleKeydown(e) {
            if ($.isUp(e) || $.isDown(e) || $.isRemove(e)) return;

            switch ($.key(e)) {
                case 'alt':
                case 'ctrl':
                case 'enter':
                case 'shift':
                case 'super':
                    return;
                case 'escape':
                    this.hide();
                    return;
            }

            this.show();
        }

        _loadQueryParam() {
            const q = new URLSearchParams(window.location.search).get('q');
            if (q) this._submitWithValue(q);
        }

        _previewValue(value) {
            this._inputEl.value = value;
        }

        _redirect(redirect) {
            if (this._newTab) window.open(redirect, '_blank');
            else window.location.href = redirect;
        }

        _registerEvents() {
            document.addEventListener('keydown', this._handleKeydown);
            this._inputEl.addEventListener('input', this._handleInput);
            this._formEl.addEventListener('submit', this._submitForm, false);

            if (this._suggester) {
                this._suggester.setOnClick(this._submitWithValue);
                this._suggester.setOnHighlight(this._previewValue);
                this._suggester.setOnUnhighlight(this._clearPreview);
            }
        }

        _submitForm(e) {
            if (e) e.preventDefault();
            const query = this._inputEl.value;
            if (this._suggester) this._suggester.success(query);
            this.hide();
            this._redirect(this._parseQuery(query).redirect);
        }

        _submitWithValue(value) {
            this._inputEl.value = value;
            this._submitForm();
        }
    };

    const queryParser = new QueryParser({
        commands: CONFIG.commands,
        pathDelimiter: CONFIG.pathDelimiter,
        searchDelimiter: CONFIG.searchDelimiter,
    });

    const influencers = CONFIG.influencers.map(influencerConfig => {
        return new {
            DuckDuckGo: DuckDuckGoInfluencer,
        } [influencerConfig.name]({
            limit: influencerConfig.limit,
            parseQuery: queryParser.parse,
        });
    });

    const suggester = new Suggester({
        enabled: CONFIG.suggestions,
        influencers,
        limit: CONFIG.suggestionsLimit,
    });

    const help = new Help({
        commands: CONFIG.commands,
        newTab: CONFIG.newTab,
    });

    const form = new Form({
        instantRedirect: CONFIG.instantRedirect,
        newTab: CONFIG.newTab,
        parseQuery: queryParser.parse,
        suggester,
        toggleHelp: help.toggle,
    });

});
