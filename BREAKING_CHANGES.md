
# 1.x -> 2.x

Nov 17, 2022

Version 1.x had `Unit` enumeration as a bitmask, with `LINEAR`, `AREA`, `ANGLE`, `LENGTH_OVER_LENGTH` numbers as bitwise OR's of the individual units based on their respective groups.

In 2.x, this was changed so `Unit` is now an enumeration of strings and the group constants are now an array of their respective units.

If you manually tested units via bitwise operations, they will need to be changed to `indexOf` checks. There will be a slight performance hit when checking unit type groups, but should be insignificant as these arrays are small.

The rationale behind these changes are because we have exceeded the `MAX_SAFE_INTEGER` when adding new Units, causing inconsistent breakage.

If you primarily used the provided APIs via `UnitUtils` / `UnitConverter` these changes should have minimal impact. If you stored the `Unit` enumeration values a migration may be required. `UnitMode`, and `UnitType` are left unchanged.
