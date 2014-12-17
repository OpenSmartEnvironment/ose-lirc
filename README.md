# Open Smart Environment LIRC package

This package allows to use LIRC in OSE. It is thus possible to
manage your environment using IR remote controllers.

It forwards received commands to the [control.remote] component.

## Status
- Pre-alpha stage (insecure and buggy)
- Unstable API
- Gaps in the documentation
- No test suite

This is not yet a piece of download-and-use software. Its important
to understand the basic principles covered by this documentation.

Use of this software is currently recommended only for users that
wish participate in the development process (see Contributions).

TODO: Make contribution a link

## Getting started
To get started with OSE, refer to the [ose-bundle] package and
[Media player example application].

## Modules
Open Smart Environment LIRC package consists of the following modules:
- LIRC kind
- OSE LIRC core
- OSE LIRC content

### LIRC kind
Entry kind for connecting to and communicating with the LIRC
daemon.

Uses [control.remote] component.

Module [LIRC kind] reference ... 

### OSE LIRC core
Core singleton of ose-lirc npm package. Register [entry kinds]
defined by this package to the `"control"` [scope].

Module [OSE LIRC core] reference ... 

### OSE LIRC content
Provides files of OSE LIRC package to the browser.

Module [OSE LIRC content] reference ... 

## Contributions
To get started contributing or coding, it is good to read about the
two main npm packages [ose] and [ose-bb].

This software is in the pre-alpha stage. At the moment, it is
premature to file bugs. Input is, however, much welcome in the form
of ideas, comments and general suggestions.  Feel free to contact
us via
[github.com/opensmartenvironment](https://github.com/opensmartenvironment).

## License
This software is licensed under the terms of the [GNU GPL version
3](../LICENCE) or later
