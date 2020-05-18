# BootstrApps - Bootstrapping Applications

Here is my collection of scripts that can be copy-pasted into the chrome console, either in any domain ([/any]()), or in specific domains.

## Directory Structure / Domains
The domain-specific apps can be used by the directory they're in, named with the reverse-order DNS directory naming system (`recreation.gov` -> [`gov/recreation/`]()).

Below a given domain directory, all scripts directly in the directly or under `[domain directory]/proj` can be used in the given domain.  All other directories represent subdomains.

Therefore, anything in or below `gov/recreation/proj` is either a standalone script, or a collection of scripts and documentation grouped into their own subdirectories, and are meant for the `recreation.gov`.  Something in `gov/recreation/parks` or `gov/recreation/parks/proj/` would be used in `parks.recreation.gov`, and so on.

## Table Of Contents
### Any
* [Display Selected Text](/any/displaySelectedText.js)

### .Gov
#### Recreation.gov
* [Campsite Availability Interface](/gov/recreation/proj/recreationGovAvailability/recreationGovAvailability.js)