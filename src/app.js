import 'isomorphic-fetch';
import Preact, {Component} from 'preact';
import FontLoader from './FontLoader';
import CollectionSelector from './CollectionSelector';
import VariationSelector from './VariationSelector';
import Preview from './Preview';
import qs from 'querystring';

const query = qs.parse(window.location.search.slice(1));

const App = () => (
  <div className="app">
    <FontLoader
      url={query.url || "AdobeVFPrototype.otf"}
      hideInput={query.hideInput || false}
    >
      <CollectionSelector>
        <VariationSelector>
          <Preview
            sampleText={query.sampleText}
            fontSize={query.fontSize}
          />
        </VariationSelector>
      </CollectionSelector>
    </FontLoader>
  </div>
);

Preact.render(<App />, document.body);
