import React, { useState, useMemo } from 'react';
import { GalleryItem, GALLERY_ITEMS } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { Eye, Layers, Tag, ArrowRight, Search, Sparkles, RotateCcw } from 'lucide-react';
import { Card, Button, Input, Grid, Tabs } from '@/components/ui';
import { LazyImage } from '@/components/common/LazyImage';

interface GalleryGridProps {
  items?: GalleryItem[];
  onSelectItem?: (item: GalleryItem) => void;
  showFilters?: boolean;
}

const CATEGORY_TABS = [
  { id: 'All', label: 'All Exhibits' },
  { id: 'Workshop', label: 'Workshop Bays' },
  { id: 'Painting', label: 'Downdraft Painting' },
  { id: 'Bodywork', label: 'Bare-Metal Bodywork' },
  { id: 'Repairs', label: 'Mechanical & Engine' },
  { id: 'Completed', label: 'Concours Delivery' },
  { id: 'Garage', label: 'Diagnostics & Intake' },
];

export const GalleryGrid: React.FC<GalleryGridProps> = ({
  items: externalItems,
  onSelectItem: externalOnSelectItem,
  showFilters = true,
}) => {
  const baseItems = externalItems || GALLERY_ITEMS;

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);

  // Card-level before/after view toggle state
  const [beforeCardIds, setBeforeCardIds] = useState<Record<string, boolean>>({});

  const toggleBeforeView = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setBeforeCardIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Filtered exhibits
  const filteredItems = useMemo(() => {
    return baseItems.filter((item) => {
      const matchCat = activeCategory === 'All' || item.category === activeCategory;
      const matchSearch =
        !searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.vehicleMeta && item.vehicleMeta.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchSearch;
    });
  }, [baseItems, activeCategory, searchQuery]);

  const handleCardClick = (item: GalleryItem) => {
    if (externalOnSelectItem) {
      externalOnSelectItem(item);
    }
    setSelectedLightboxItem(item);
  };

  // Lightbox navigation
  const currentIndex = selectedLightboxItem
    ? filteredItems.findIndex((i) => i.id === selectedLightboxItem.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedLightboxItem(filteredItems[currentIndex - 1]);
    } else {
      setSelectedLightboxItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedLightboxItem(filteredItems[currentIndex + 1]);
    } else {
      setSelectedLightboxItem(filteredItems[0]);
    }
  };

  const hasActiveFilters = activeCategory !== 'All' || searchQuery.trim() !== '';

  const handleResetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="space-y-8">
      {/* Responsive Filterable Header Bar */}
      {showFilters && (
        <div className="p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-4 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-500 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Workshop Visual Documentation</span>
              </span>
              <h4 className="text-lg font-bold text-white mt-0.5">
                Filter Exhibits by Automotive Discipline
              </h4>
            </div>

            {/* Keyword Search Input */}
            <div className="w-full md:w-64">
              <Input
                placeholder="Search tags, equipment, models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                leftIcon={<Search className="w-4 h-4 text-slate-400" />}
                className="text-xs bg-slate-950 py-2"
              />
            </div>
          </div>

          {/* Category Tabs using UI Component */}
          <div className="pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2">
            <Tabs
              tabs={CATEGORY_TABS}
              activeTab={activeCategory}
              onChange={(id) => setActiveCategory(id)}
              variant="amber"
            />

            {hasActiveFilters && (
              <button
                type="button"
                onClick={handleResetFilters}
                className="inline-flex items-center gap-1 text-xs text-rose-400 hover:text-rose-300 font-medium py-1 px-2 cursor-pointer transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
            <span>
              Showing <strong className="text-white font-mono">{filteredItems.length}</strong> of{' '}
              <strong className="text-slate-300 font-mono">{baseItems.length}</strong> Workshop Exhibits
            </span>
            {hasActiveFilters && (
              <span className="text-amber-400/90 font-mono text-[11px]">Filtered Results</span>
            )}
          </div>
        </div>
      )}

      {/* Responsive Gallery Grid */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800 space-y-4">
          <p className="text-slate-400 text-sm">No exhibits found matching the selected filter criteria.</p>
          {hasActiveFilters && (
            <Button variant="secondary" size="sm" onClick={handleResetFilters}>
              Clear Filters
            </Button>
          )}
        </div>
      ) : (
        <Grid cols={1} smCols={2} lgCols={3} gap={6}>
          {filteredItems.map((item) => {
            const isShowingBefore = Boolean(beforeCardIds[item.id] && item.beforeImage);
            const currentSrc = isShowingBefore && item.beforeImage ? item.beforeImage : item.image;

            return (
              <Card
                key={item.id}
                hoverEffect
                className="group cursor-pointer bg-slate-900 border-slate-800 overflow-hidden flex flex-col justify-between"
              >
                {/* Image Stage */}
                <div
                  className="relative h-64 overflow-hidden bg-slate-950"
                  onClick={() => handleCardClick(item)}
                >
                  <LazyImage
                    src={currentSrc}
                    alt={item.title}
                    wrapperClassName="w-full h-full"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-85 group-hover:opacity-60 transition-opacity pointer-events-none" />

                  {/* Top Bar: Category Pill & Before/After Toggle */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded bg-slate-950/80 backdrop-blur-sm border border-slate-800 text-[11px] font-semibold text-amber-400 uppercase tracking-wider">
                      {item.category}
                    </span>

                    {item.beforeImage && (
                      <button
                        type="button"
                        onClick={(e) => toggleBeforeView(e, item.id)}
                        className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-bold shadow-md transition-all cursor-pointer ${
                          isShowingBefore
                            ? 'bg-rose-600 text-white border border-rose-500'
                            : 'bg-slate-950/80 text-amber-400 border border-slate-700/80 hover:bg-slate-800'
                        }`}
                        title="Click to toggle intake vs completed photo"
                      >
                        <Layers className="w-3 h-3" />
                        <span>{isShowingBefore ? 'Intake (Before)' : 'View Before'}</span>
                      </button>
                    )}
                  </div>

                  {/* Center Hover Magnifier Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                    <div className="p-3 rounded-full bg-amber-500 text-slate-950 shadow-xl shadow-amber-500/30 transform scale-75 group-hover:scale-100 transition-transform">
                      <Eye className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Image Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    {item.vehicleMeta && (
                      <span className="text-[10px] text-amber-400 font-mono tracking-wider block">
                        {item.vehicleMeta}
                      </span>
                    )}
                    <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Bottom Card Meta Details */}
                <div className="p-4 bg-slate-900 border-t border-slate-800/80 flex flex-col justify-between flex-grow">
                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {item.caption}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-800"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCardClick(item)}
                      className="text-xs text-amber-400 font-semibold hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Full Resolution</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </Card>
            );
          })}
        </Grid>
      )}

      {/* High-Resolution Lightbox Modal */}
      <Lightbox
        item={selectedLightboxItem}
        onClose={() => setSelectedLightboxItem(null)}
        onPrev={filteredItems.length > 1 ? handlePrev : undefined}
        onNext={filteredItems.length > 1 ? handleNext : undefined}
      />
    </div>
  );
};
