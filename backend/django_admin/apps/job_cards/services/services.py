from ..model.models import JobCard, JobCardStage

class JobCardService:
    @staticmethod
    def advance_stage(job_card: JobCard, next_stage: str, progress: int = None) -> JobCard:
        job_card.current_stage = next_stage
        if progress is not None:
            job_card.progress_percentage = progress
        job_card.save()
        return job_card
