# HTML-CSS-JS-snippets
### **actual-potential** - 2 option lists: one of choosen options - actual, another - to choose from - potential. 
### **details** - hamburger menu using <details> tag (modified code of Jason Zimdars in comments to [Three CSS Alternatives to JavaScript Navigation](https://css-tricks.com/three-css-alternatives-to-javascript-navigation/)
### **dynamic-list** - programmatically filled list with per-row buttons removing those rows. 
#### Possible applicaton - TODO-list, shooping list etc.
### **hlit-elem** - how to extract actual style value and change it programmatically on click
#### Possible application - single-click/tap highlight
### **lib** - an attempt to create microlibrary delivering via jsdelivr
#### I could not find how frequently jsdelivr refreshes...
### **open-close** - a tree-like structure with collapsible branches
### **select-with-color-swatch** - similar to open-close, but behaving like <select>. Has color swatches in each option
#### I need something like this in timelogger
### **select-with-groups** - programmatically filled select with option groups and code extracting option properties on option selection
#### Possible application - a self-contained list with additional information (data snapshot together with UI displaying this data)
### **speechSynthesis-how-many-instances** - Does iframe have separate instance of speechSynthesis? My check shows that yes.
#### You cannot compare 2 instances with a piece of code, but if you know that page instance has non-null onvoiceschanged member, you can check if this holds for iframe instance. It doesn't - so iframe has separate speechSynthesis instance. **Checked with Firefox, Edge and Chrome**
#### Possible application: suppose you have 2 utterances:  "A" - rather long one and "B" - a short one (selected by user while speaking A). You need to pause A, speak B and then resume A. It is impossible with one speechSynthesis instance because **speaking** and **paused** are speechSynthesis' rather than utterance's properties.

