from ..model.models import Vehicle, VehicleEra

class VehicleService:
    @staticmethod
    def infer_era_from_year(year: int) -> str:
        if year < 1945:
            return VehicleEra.PRE_WAR
        elif year <= 1965:
            return VehicleEra.CLASSIC_POSTWAR
        elif year <= 1980:
            return VehicleEra.MUSCLE_PONY
        elif year <= 2000:
            return VehicleEra.MODERN_CLASSIC
        return VehicleEra.CONTEMPORARY
