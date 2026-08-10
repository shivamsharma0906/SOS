import React, { useState } from 'react';
import { Search, ChevronRight, Activity, Zap, Bone, Disc, Shield, Compass, Lock, Sun } from 'lucide-react';
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
      c.symptoms.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getConditionIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity': return <Activity size={20} color="var(--navy-primary)" />;
      case 'Disc': return <Disc size={20} color="var(--navy-primary)" />;
      case 'Bone': return <Bone size={20} color="var(--navy-primary)" />;
      case 'Zap': return <Zap size={20} color="var(--navy-primary)" />;
      case 'Shield': return <Shield size={20} color="var(--navy-primary)" />;
      case 'Sun': return <Sun size={20} color="var(--navy-primary)" />;
      case 'Compass': return <Compass size={20} color="var(--navy-primary)" />;
      default: return <Lock size={20} color="var(--navy-primary)" />;
    }
  };

  return (
    <section style={{ padding: '4rem 0', backgroundColor: '#ffffff' }} id="conditions-treated">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
          <div className="badge-tag" style={{ marginBottom: '0.75rem' }}>
            Comprehensive Care
          </div>
          <h2 className="heading-lg" style={{ marginBottom: '1rem' }}>
            Conditions We Treat
          </h2>
          <p className="subhead" style={{ margin: '0 auto' }}>
            Select your pain area or search symptoms to find our dedicated non-surgical and keyhole treatment programs.
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
            borderRadius: 'var(--radius-md)'
          }}
        >
          {/* Category Tabs */}
          <div className="conditions-category-tabs" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  backgroundColor: selectedCategory === cat ? 'var(--navy-primary)' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : 'var(--navy-primary)',
                  boxShadow: selectedCategory === cat ? '0 2px 8px rgba(10, 31, 68, 0.2)' : 'none',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
              >
                {cat} {cat !== 'All' ? 'Care' : ''}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="conditions-search-box" style={{ position: 'relative', minWidth: '260px' }}>
            <input
              type="text"
              placeholder="Search condition or symptom (e.g. Sciatica)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '0.55rem 1rem 0.55rem 2.4rem',
                borderRadius: 'var(--radius-pill)',
                border: '1px solid var(--border-color)',
                fontSize: '0.88rem',
                outline: 'none'
              }}
            />
            <Search size={15} style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
          </div>
        </div>

        {/* Conditions Grid */}
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
                boxShadow: '0 4px 12px rgba(10, 31, 68, 0.04)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 28px rgba(10, 31, 68, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(2, 132, 199, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(10, 31, 68, 0.04)';
                e.currentTarget.style.borderColor = 'rgba(10, 31, 68, 0.06)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--blue-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getConditionIcon(condition.icon)}
                </div>

                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--navy-primary)', backgroundColor: '#ffffff', padding: '0.2rem 0.5rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}>
                  {condition.category}
                </span>
              </div>

              <h3 className="heading-sm" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                {condition.name}
              </h3>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '1rem' }}>
                {condition.shortDesc}
              </p>

              {/* Key Symptoms */}
              <div style={{ marginTop: 'auto', marginBottom: '1.1rem' }}>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--navy-primary)', marginBottom: '0.35rem' }}>
                  Common Symptoms:
                </div>
                <ul style={{ paddingLeft: '1.1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  {condition.symptoms.slice(0, 2).map((sym, i) => (
                    <li key={i}>{sym}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={() => {
                  setActiveCondition(condition);
                  setIsModalOpen(true);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  padding: '0.55rem 0.85rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: '#ffffff',
                  border: '1px solid var(--border-color)',
                  color: 'var(--navy-primary)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <span>Consult Doctor for {condition.name.split(' ')[0]}</span>
                <ChevronRight size={14} />
              </button>
            </div>
          ))}
        </div>
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
            padding: 1.25rem !important;
            box-shadow: 0 4px 16px rgba(10, 31, 68, 0.05) !important;
          }
          .condition-card-item:nth-child(n+4) {
            display: none !important;
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
