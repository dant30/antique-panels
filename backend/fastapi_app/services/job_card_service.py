"""FastAPI Job Card Telemetry Logic."""
class JobCardService:
    STAGE_PROGRESS_MAP = {
        "INTAKE_QC": 5,
        "TEARDOWN": 15,
        "STRIPPING": 25,
        "PANEL_BEATING": 45,
        "SURFACE_PREP": 60,
        "PAINT_BOOTH": 75,
        "POLISHING": 85,
        "ASSEMBLY": 92,
        "ROAD_TEST": 97,
        "FINAL_DETAILING": 99,
        "READY": 100
    }

    @classmethod
    def calculate_progress(cls, stage: str) -> int:
        return cls.STAGE_PROGRESS_MAP.get(stage, 10)
