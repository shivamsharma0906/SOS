import React, { useState } from 'react';
import { Search, ArrowRight, Activity, Zap, Bone, Disc, Shield, Compass, Lock, Sun, X } from 'lucide-react';
import { conditionsData, Condition } from '../data/conditions';
import { AppointmentModal } from './AppointmentModal';

export const ConditionsGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCondition, setActiveCondition] = useState<Condition | null>(null);

  const categories = ['All', 'Spine', 'Joint', 'Bone', 'Sports'];

  const filteredConditions = conditionsData.filter((c) => {
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.symptoms.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (cat: string) => {
    if (cat === 'All') return conditionsData.length;
    return conditionsData.filter(c => c.category === cat).length;
  };

  const getConditionIcon = (iconName: string) => {
    const iconSize = 20;
    switch (iconName) {
      case 'Activity': return <Activity size={iconSize} color="#ffffff" />;
      case 'Disc': return <Disc size={iconSize} color="#ffffff" />;
      case 'Bone': return <Bone size={iconSize} color="#ffffff" />;
      case 'Zap': return <Zap size={iconSize} color="#ffffff" />;
      case 'Shield': return <Shield size={iconSize} color="#ffffff" />;
      case 'Sun': return <Sun size={iconSize} color="#ffffff" />;
      case 'Compass': return <Compass size={iconSize} color="#ffffff" />;
      default: return <Lock size={iconSize} color="#ffffff" />;
    }
  };

  return (
    <section style={{ padding: '4.5rem 0', backgroundColor: '#ffffff' }} id="conditions-treated">
      <div className="container">
        {/* Header Title Section */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
            Comprehensive Care Matrix
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Conditions We Treat
          </h2>
          <p className="subhead" style={{ margin: '0 auto' }}>
            Select your pain area or search symptoms to find our dedicated non-surgical, physical therapy, and keyhole treatment programs across Mumbai.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div 
          className="conditions-filter-bar"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '2.5rem',
            backgroundColor: 'var(--bg-subtle)',
            padding: '1rem 1.25rem',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid rgba(10, 31, 68, 0.06)'
          }}
        >
          {/* Category Tabs */}
          <div className="conditions-category-tabs" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              const count = getCategoryCount(cat);

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.45rem 1.1rem',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    border: '1.5px solid transparent',
                    cursor: 'pointer',
                    backgroundColor: isActive ? 'var(--navy-primary)' : '#ffffff',
                    color: isActive ? '#ffffff' : 'var(--navy-primary)',
                    borderColor: isActive ? 'var(--navy-primary)' : 'var(--border-color)',
                    boxShadow: isActive ? '0 4px 12px rgba(10, 31, 68, 0.15)' : 'none',
                    transition: 'all 0.2s ease',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    flexShrink: 0
                  }}
                >
                  <span>{cat} {cat !== 'All' ? 'Care' : ''}</span>
                  <span style={{
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'var(--blue-soft)',
                    color: isActive ? '#ffffff' : 'var(--blue-brand)',
                    padding: '0.1rem 0.45rem',
                    borderRadius: '10px'
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Input Box */}
          <div className="conditions-search-box" style={{ position: 'relative', minWidth: '280px' }}>
            <input
              type="text"
              placeholder="Search condition or symptom (e.g. Sciatica)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.6rem 2.2rem 0.6rem 2.5rem',
                borderRadius: 'var(--radius-pill)',
                border: '1.5px solid var(--border-color)',
                fontSize: '0.88rem',
                backgroundColor: '#ffffff',
                color: 'var(--navy-primary)',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
              onFocus={e => e.currentTarget.style.borderColor = 'var(--blue-brand)'}
              onBlur={e => e.currentTarget.style.borderColor = 'var(--border-color)'}
            />
            <Search size={16} style={{ position: 'absolute', left: '0.9rem', top: '50%', transform: 'translateY(-50%)', color: '#64748b' }} />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
                style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Conditions Grid */}
        {filteredConditions.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: 'var(--bg-subtle)', borderRadius: 'var(--radius-lg)' }}>
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              No conditions found matching "<strong>{searchQuery}</strong>".
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="btn btn-secondary btn-sm"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid-4" style={{ gap: '1.5rem' }}>
            {filteredConditions.map((condition) => (
              <div
                key={condition.id}
                className="condition-card-item"
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem',
                  border: '1px solid rgba(10, 31, 68, 0.06)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 14px rgba(10, 31, 68, 0.04)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 14px 30px rgba(10, 31, 68, 0.09)';
                  e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 14px rgba(10, 31, 68, 0.04)';
                  e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.06)';
                }}
              >
                {/* Header Icon & Category Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #0284c7 0%, #0a1f44 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 10px rgba(2, 132, 199, 0.25)'
                  }}>
                    {getConditionIcon(condition.icon)}
                  </div>

                  <span style={{
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    color: 'var(--navy-primary)',
                    backgroundColor: 'var(--blue-soft)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid rgba(2, 132, 199, 0.15)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {condition.category} Care
                  </span>
                </div>

                {/* Title */}
                <h3 className="heading-sm" style={{ fontSize: '1.12rem', marginBottom: '0.5rem', color: 'var(--navy-primary)', lineHeight: 1.3 }}>
                  {condition.name}
                </h3>

                {/* Description */}
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                  {condition.shortDesc}
                </p>

                {/* Common Symptoms List */}
                <div style={{ marginTop: 'auto', marginBottom: '1.25rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-color)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Common Symptoms:
                  </div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {condition.symptoms.slice(0, 2).map((sym, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.35rem', lineHeight: 1.35 }}>
                        <span style={{ color: 'var(--blue-brand)', fontWeight: 800 }}>•</span>
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle Consultation Action Link */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveCondition(condition);
                    setIsModalOpen(true);
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: 'none',
                    border: 'none',
                    color: 'var(--blue-brand)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    padding: 0,
                    marginTop: 'auto',
                    transition: 'gap 0.2s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.gap = '0.55rem'}
                  onMouseLeave={e => e.currentTarget.style.gap = '0.35rem'}
                >
                  <span>Consult for {condition.name}</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 767px) {
          #conditions-treated {
            padding: 2.5rem 0 !important;
          }
          .conditions-filter-bar {
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 0.85rem !important;
            gap: 0.85rem !important;
            margin-bottom: 1.5rem !important;
          }
          .conditions-category-tabs {
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            padding-bottom: 0.35rem !important;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
          }
          .conditions-category-tabs::-webkit-scrollbar {
            display: none;
          }
          .conditions-search-box {
            width: 100% !important;
            min-width: 100% !important;
          }
          .condition-card-item {
            padding: 1.35rem 1.25rem !important;
            box-shadow: 0 4px 16px rgba(10, 31, 68, 0.05) !important;
          }
        }
      `}</style>

      <AppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultService={activeCondition?.recommendedServiceId}
      />
    </section>
  );
};
